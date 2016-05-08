---
layout: post
title: "Crash Analysis System: Aggregation Wizardary"
date: 2016-05-08 20:22:00 +1300
comments: true
category:
tags: ["Open Data", "NZTA", "CAS"]
---

*This is a follow-up post to my previous entry, ["Crash Analysis System: The Narrative Arc"](www.nearimprov.com/cas-saga), in which I describe my on-going dispute with the NZTA about access to a comprehensive record of road-accident data for New Zealand.*

Since my last post I've had a number of people come forward and demystify aspects of the NZTA's Crash Analysis System (CAS) that I did not fully appreciate. The NZTA has also come up with the aggregated data I've been waiting on for several months. In this post I'll take you through this new public method of accessing CAS-the-data, and also highlight some of the aspects of CAS that I've learned since my last post. The TL;DR is that the aggregation is everything we knew it would be: a shotgun to the balls. There's no upside to it.

In my last post I included a sample disaggregate CAS record, of a crash in Ashburton. Here it is again:

```csv
'Ashburton District','MOORE ST','100','N',' ','WILLIAM ST','201531749','07/02/2015','Sat','2335','EA','CN1V','103A 129A ','M','R','D','DO','F ',' ',' ','C','050','0','0','0','','','1499510','5137544',
```

Decoded, it might look like this:

<br>
{% maincolumn "./assets/cas-saga/asburton-example.png" "" %}

Now that the NZTA has [released aggregate data](http://www.nzta.govt.nz/resources/crash-analysis-reports/grouped-crash-sites/), we can compare and contrast the so-called "grouped crash sites":

```csv
201212510,1822862,5530978,I,4,,0,Palmerston North,RUAHINE ST,FEATHERSTON ST,50
```

There's a lot less there, but initially it's actually harder to decode this information, because the NZTA has apparently also taken this opportunity to change how they classify crashes.{% sidenote "sn-id-1" "From January 2016 CAS now uses v4.0 of the [`guide-to-coded-crash-reports`](http://www.nzta.govt.nz/assets/resources/guide-to-coded-crash-reports/docs/Factors-contributing-to-crashes-for-use.pdf). In case NZTA moves or removes it, download it from me [here](./assets/cas-saga/guide-to-coded-crash-reports_v4.0.pdf). I just hope it's possible to download the older data in this same schema." %} The NZTA explains{% sidenote "sn-id-2" "A "diff" PDF can be obtained from the NZTA [here](http://www.nzta.govt.nz/assets/resources/guide-to-coded-crash-reports/docs/New-retired-merged-contributory-factors-for-use-from-1-Jan-2016.pdf), and from me [here](./assets/cas-saga/cas-diff.pdf`). The changes largely look fine, and they have included conversions between lots of codes they have changed. An interesting new inclusion is **697: Vehicle software failure**, but I'm not sure what **856: Barriers necessary** and **857: Island necessary** are---they sound like policy, not explanations of an accident. Still, props to the NZTA for the semantic versioning, my only real quibble is that a PDF has to be the most annoying format for communicating a table of data. I'll get around to making a machine-readable format of this in the near future and it will be included in my CAS repository. At that time I'll also write CAS v4.0 versions of the original data, going back to the year 2000." %} that

> Minor changes to some contributory factor codes were made in March [2016]. As mentioned in previous messages, a few new codes have been added, a few have been retired and some have merged into other codes. Where codes have been merged, historical crashes containing merged codes have been updated to reflect that.

However none of the raw data is available without signing a license agreement. Looking at that aggregated record I included above, there is no crash code at all. Here's what we get in the aggregate format:

<code>
Grouped Site ID: Unique identifier of the crash site
<br><br>
Grouped Site Easting: Coordinates of the crash site - NZ Transverse Mercator 2000 easting
<br><br>
Grouped Site Northing: Coordinates of the crash site - NZ Transverse Mercator 2000 northing
<br><br>
Grouped Site Type: Site type - I (intersection), blank (other)
<br><br>
Site Crash Count: Number of crashes at this site
<br><br>
Site Location Direction: The direction of the crash from the reference point. Values N, E, S, W
<br><br>
Site Location Distance: The distance of the crash from the reference point for the crash (often the intersection of 'Crash Road' and 'Side Road')
<br><br>
Territorial Local Authority: Territorial local authority where the crash occurred
<br><br>
Crash Road: Part one of the crash location. May be a road name, state hIghway route position, landmark, or other
<br><br>
Side Road: Part 2 of the crash location. May be a side road name, landmark etc
<br><br>
Speed Limit: The speed limit in force at the crash site at the time of the crash
</code>

We see that in the metadata "crash" is used in the singular, when the whole point of the aggregate data is that we cannot be trusted with individual accidents any longer.

By eyeballing this record I can tell you that four injury-causing (or fatal) accidents have happened at this one site in Palmerston North, within 30m of the intersection of Ruahine Street and Featherston Street, at some point in the period from 1 July 2012 to 30 June 2015.

**That's literally all I can tell you.**

I can't tell you what modes of transport were involved (car, truck, cyclist?). The speed limit says 50 km/h, but does that actually apply to both streets? From the metadata I can tell you that these must only include accidents with minor injuries or worse, but I can't even say whether or not someone has died here, or how. I don't even know when these crashes happened, or when the first and last crashes in the group occurred. The "Grouped Site ID" looks suspiciously like a date (201212510 → December 2012?), but I'm just guessing and there's no way they all happened at once so even if it was a date it would be almost useless for many types of analytical question. Did they happen at night? At the weekend? Was someone drunk in one or all of these crashes? Hell, maybe I'm just going to start making shit up since we have no other real option.

A large proportion of the original data was no-injury crashes, which now are completely absent, not even present in aggregate. These are almost certainly under-represented in CAS... but what kind of response is this? Accidents that are under-represented are not really candidates for redaction.

<br>
{% maincolumn "./assets/cas-saga/meta.png" "A disclaimer that comes with the aggregate data, inside the spreadsheet. Note that I can't even open the original .xlsx on my computer due to (I assume) the gross formatting the NZTA has thrown into the spreadsheet; LibreOffice Calc complains that the file has been corrupted. I agree." %}

To top it off, the CAS data is still late: following the old CAS data schedule, we'd have disaggregate data up to December 2015 by now, rather than just June 2015: so we're six months late and severely short-changed.

I wouldn't be so mad about this if I didn't know the NZTA collects better information than this, but they do. Apparently the public just can't be trusted with it. We've even progressed down Randall's file-extension-trustworthiness-index, from the heights of a `.csv`:

<br>
{% fullwidth 'http://imgs.xkcd.com/comics/file_extensions.png' '' %}

Actually, we've gone even further back (in time). I found reference to another Microsoft Excel application last week. Inside there is [a magic wizard](https://www.nzta.govt.nz/resources/road-safety-wizard/).{% marginfigure "mf-id-wizard" "./assets/cas-saga/wizard.gif" "Greetings from the Computer Wizard... in all seriousness, this is probably a good thing for some people. But I hardly think it's controversial to suggest that in 2016 we can easily make tools at least twice as good as an Excel Macro Wizard." %}

This seems to somehow make a connection to the NZTA's servers to download five years of CAS data on demand, and can tell you about the crash factors, road type, lightning, and weather conditions. I'd tell you more, but I can't actually use the Wizard because I don't have Microsoft Office. I said this last time but it's worth repeating with emphasis: **if you require people to have licenses for proprietary software to access open data, the data is not open.** It's 2016, we ought to be making web applications, not spreadsheet wizards.

You can take a gander at the wizard in this PDF from the NZTA [here](https://www.nzta.govt.nz/assets/userfiles/transport-data/safety-suburb-help.pdf), and from me [here](./assets/cas-saga/safety-suburb-help). It's worth noting that even this tool is severely limited: you can only filter on four crash factors: alcohol, overtaking, speed, and fatigue (I don't know exactly which factor codes are included, or how). In addition, you can only see down to a suburb level, so the aggregation here is even more severe.

# Other things I've learnt about CAS

According to the Way Back Machine, the NZTA has published the original CSV data (or something like it) since at least 2006. Glen Koorey mentioned in a comment on the first post that CAS-the-system is about 15 years old, which marries with how much data used to be available for download without signing a license agreement. I learnt a little about Citrix, and apparently there are non-Windows clients that will enable interested parties to explore CAS via NZTA's interface. Personally I'm still not into that: my problem is that I want to create my own data exploration tool for CAS. **CAS was never intended for general public consumption; I want to make it so it is.**

Glen also mentioned that a CAS upgrading program has been underway for a few years. One can get on the mailing list for this at <mailto:casreplacement@nzta.govt.nz>. Frankly it's hard to see much fruit.

The other *very interesting tidbit* that I discovered from one my readers is that the CAS interface (the one you get via Citrix after signing the license agreement) actually *allows you to download the disaggregate information in the exact same schema as the original CSVs*. For a higher fee, super-users can actually see super-disaggregate data that surely has some serious privacy considerations: records include names, addresses, Police sketches, Police comments, etc.

Apparently not just anyone can get a license to CAS (you need to justify why you need access),{% sidenote "sn-id-5" "Although I've been offered it twice without giving a specic road-safety justification. "%} and (I hope) not just anyone in that subset can access the information that is actually sensitive. A basic CAS license costs $500 per year.{% sidenote "sn-id-6" "Though it's very likely that it no longer costs anything—I have recieved conflicting information on this matter." %} The extended license costs up to $3000 a year.{% sidenote "sn-id-4" "Disclaimer: not an official source of information." %}

## Here's some raw data...

**...since the NZTA isn't exactly giving it away like candy**

To prove the utter pointlessness of the NZTA's licensing system for access to (basic) CAS data: [here's the disaggregate data that I've been wanting all year, as a CSV](./assets/cas-saga/all-crashes-nz-2015.csv). Note that this uses the new, v4.0 crash factor codes, so it's not as easy  to ingest. It does overlap the first-quarter 2015 data I already have available on Github, so you can do a diff easily. When I get some time, I'll update my original web application so you can explore this data at your leisure: it will be the only way you can explore the disaggregate data without NZTA pre-approval!

I suppose there's a mild ethical issue at stake here: strictly speaking I know I shouldn't be disemminating this data. But I haven't actually signed anything to say I can't. I recieved this information from a third party who I won't ever reveal. But the fact that I did get my hands on it is pretty indicative of how pointless NZTA's restrictions are. **The public can still access the disaggregate data, so the privacy argument is moot.** All that the NZTA is achieving is frustration and a disempowering of the general public in matters of road safety information, while increasing their own internal costs.

In the next few days I'll be submitting some requests for information under the OIA to bring more light on the decisions that have led to this point.
