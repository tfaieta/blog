---
path: "/android-opt-rn"
date: "2018-07-28T12:12:33.962Z"
title: "Optimizing Android for RN"
---

I know, I know, you shipped your app and it was lovely on iPhone but a complete mess on Android. The same thing happened to us, when we launched our [podcasting](https://play.google.com/store/apps/details?id=com.tess) [app](https://itunes.apple.com/us/app/tess-podcast-app/id1409521849?ls=1&mt=8). So we scoured the internet, performance docs, and ultimately made Tess work much smoother across Android devices. This is not an intensive look, but it’s what we did that worked and hopefully can help you too.
<br>
<br>
First off, as we learned, there’s always going to be a difference between your simulator and the phone that your friend has. So, some of the best advice I can give you if nobody on your team has an Android is to go ahead and purchase some cheap phones from Facebook marketplace/phone reseller stores to physically test your production builds.
<br>
<br>
Not only does doing this help you with debugging/seeing production builds but by playing around with not only your app but other Android apps, you get to see many of the things that are natural to Android users that people in a Apple ecosystem simply don’t see. So I encourage you to not only use the phone to test your app but try to build some knowledge of the Android UX.
<br>
<br>
Now, let’s talk about some Android optimization in React Native!
<br>

##### Using console.log statements:
Having any active console.log statements in your production build will significantly impacts the performance of the build. This is stated in the [Performance](https://facebook.github.io/react-native/docs/performance) section of the React Native documentation. There is a quick fix that is pointed out in the documentation that uses `babel-plugin-transform-remove-console` that automatically takes out all console statements on production builds like so:
<br>
<br>
In:
<br><br>
<code>console.log("foo");console.error("bar");</code>
<br><br>
Out:
<br><br>
<code>null</code>

<br>
To add this babel script to your project simply install it with:
<br>
<br>

<code>npm i babel-plugin-transform-remove-console --save-dev</code>

<br>
Then edit your .babelrc file:
<br><br>
<code>{ "env": 	{ "production": 		{ "plugins": ["transform-remove-console"] } 	}}</code>
<br><br>

<br><br>
##### Using ListView instead of FlatList or SectionList

ListView has now been deprecated and we had heard that many of the problems and slowness coming was from using ListView for large lists. Again this is something straight out of the performance documentation.
<br>
<br>
Docs for FlatList: [https://facebook.github.io/react-native/docs/flatlist](https://facebook.github.io/react-native/docs/flatlist)
<br><br>
Docs for SectionList: [https://facebook.github.io/react-native/docs/sectionlist](https://facebook.github.io/react-native/docs/sectionlist)
<br>
<br>
Honestly this is much more important than you might think. Here’s a [blog post](https://facebook.github.io/react-native/blog/2017/03/13/better-list-views.html) written by Spencer Ahrens from the RN team that explains more.
<br><br><br>

##### Run all static images through an optimizer

Image optimizers remove metadata from your image files without losing pixel quality. There are many out there but the one we used was [ImageOptim](https://imageoptim.com/mac), it’s free and [open source](https://github.com/ImageOptim/ImageOptim). Just to give an example of how much data you can take away from your overall static assets, I put all of our static assets from our [website](http://tess.fm/) through ImageOptim and this was the result:
<br><br>

![imageoptim](https://raw.githubusercontent.com/tfaieta/tfaieta.com/develop/src/img/imgOptim.png)

<br>
<br>
When running through our assets for the mobile app, we removed 52% of the overall size of our static assets. This by itself helped many of the phones that weren’t properly rendering our images to render them.
<br><br><br><br>

##### Reduce GPU Overdraw

The Android documentation states that GPU overdraw is:
<br><br>
An app may draw the same pixel more than once within a single frame, an event called overdraw. Overdraw is usually
unnecessary, and best eliminated. It manifests itself as a performance problem by wasting GPU time
to render pixels that don’t contribute to what the user sees on the screen.
<br>
<br>
You can check your overdraw by:
<br>
1.  On your simulator or physical device, go to **Settings** and tap **Developer Options**.
2.  In the **Monitoring** section, select **Profile GPU Rendering**.
3.  In the Profile GPU Rendering dialog, choose **On screen as bars** to overlay the graphs on the screen of your device.
4.  Open the app that you want to profile.

If you don’t know how to get the developer options on your simulator, you just tap 7 times on Build Number in your simulator/physical device’s settings.
<br><br>
Don’t worry if you see everything red, this is okay if you’ve never looked at it and reducing GPU overdraw can be simple:
<br>
- Remove any `backgroundColor: ‘transparent'` that is not needed. Most components and views have a transparent background color by default and setting this in your styles causes it to render twice. Also remove any other unneeded backgrounds that you may need.
- Using FlatList and SectionList!

Note: remember search and replace with git and sed!
<br><br>
<code>git grep -l 'original' | xargs sed -i -e 's/original/replace_with_this/g'</code>
<br><br>
##### Resources

Things that may help you!

- A package called [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image) that in my research has helped many people to aggressively cache their images, set priorities for loading, preload images, has GIF support, and is well maintained.
- An [article](https://codeburst.io/6-simple-ways-to-speed-up-your-react-native-app-d5b775ab3f16) written by Atinder Singh that talks on important things you can do to overall make your RN application faster.
- Testing w/ [Jest](https://jestjs.io/docs/en/tutorial-react-native)

Thanks so much for reading and I hope this helps someone, if it did feel free to let me know or if you have more things to share about Android optimization in React Native.