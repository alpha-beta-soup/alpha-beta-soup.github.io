'use client';

import React, { useRef, useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import GeoJSON, { GeoJSONFeatureCollection } from 'ol/format/GeoJSON';
import { fromLonLat, toLonLat } from 'ol/proj';
import { transform } from 'ol/proj';
import { Feature } from 'ol';
import { Style, Icon, Text, Fill, Stroke } from 'ol/style';
import { Extent, extend, applyTransform } from 'ol/extent';
import { defaults as defaultControls } from 'ol/control';
import 'ol/ol.css';

interface MapComponentProps {
    geojson: GeoJSONFeatureCollection;
    projection: string; // e.g., 'EPSG:3857',
    initialCenter?: [number, number];
    isInteractive?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ geojson, projection, initialCenter = [90,30], isInteractive = true }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        if (!mapInstanceRef.current) {

            const vectorSource = new VectorSource({
                features: geojson ? new GeoJSON().readFeatures(geojson, {
                    featureProjection: projection
                }) : []
            })

            const vectorLayer = new VectorLayer({
                source: vectorSource,
                style: (feature) => {
                    return new Style({
                        image: new Icon({
                            src: feature.get('icon'),
                            scale: feature.get('scale')
                        })
                        // text: new Text({
                        //     font: '12px Calibri,sans-serif',
                        //     text: feature.get('label'),
                        //     textAlign: 'center',
                        //     textBaseline: 'top',
                        //     fill: new Fill( {color: '#000' }),
                        //     stroke: new Stroke({
                        //         color: 'rgba(255,255,255,0.5)',
                        //         width: 5
                        //     }),
                        //     offsetY: 25
                        // })
                    })
                }
            });

            const map = new Map({
                target: mapRef.current,
                layers: [
                    new Tile({
                        source: new OSM(),
                    }),
                    vectorLayer,
                ],
                view: new View({
                    center: fromLonLat(initialCenter, projection),
                    zoom: 2,
                    projection,
                }),
                interactions: isInteractive ? undefined : [],
                controls: defaultControls(),
            });

            mapInstanceRef.current = map;
        } 
        if (geojson || projection) {
            // Update the existing map with new GeoJSON data
            const features = new GeoJSON().readFeatures(geojson, {
                featureProjection: projection
            });

            const vectorLayer = mapInstanceRef.current.getLayers().item(1) as VectorLayer<Feature>;
            vectorLayer.getSource()?.clear();
            vectorLayer.getSource()?.addFeatures(features);

            const extent = features.reduce((acc: Extent, feature) => {
                const featureExtent = feature.getGeometry()?.getExtent();
                if (featureExtent) {
                    extend(acc, featureExtent);
                }
                return acc
            }, [Infinity, Infinity, -Infinity, -Infinity])
            const BUFFER_SIZE = 10; // in map units
            const bufferedExtent = [
                extent[0] - BUFFER_SIZE,
                extent[1] - BUFFER_SIZE,
                extent[2] + BUFFER_SIZE,
                extent[3] + BUFFER_SIZE,
            ];

            if (mapInstanceRef.current) {
                const mapSize = mapRef.current.getBoundingClientRect();
                const padding = 40; // in pixels
                mapInstanceRef.current?.getView().fit(bufferedExtent, {
                    size: [mapSize.width, mapSize.height],
                    padding: Array(4).fill(padding),
                });
            }
        }
    }, [geojson, projection]);

    return (
        <div
            ref={mapRef}
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
};

export default MapComponent;