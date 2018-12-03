---
path: "/eds"
date: "2018-11-30T12:12:33.962Z"
title: "The future of all political campaigns; a deeper look into Artificial Intelligence, bots, and the rise of platform-as-a-service."
layout: post
draft: false
category: "Projects"
tags:
  - "Projects"
  - "AI"
  - "Python"
description: "For the past couple of elections, I have spent some time reading about how social media has played a role in our elections and more specifically how it's helping or hurting political campaigns. Through my research, I have found some rather alarming ways that political campaigns are using artificial intelligence, and how some companies are offering platform-as-a-service software to political campaigns."
---

![Robot.jpg](https://github.com/tfaieta/tfaieta.com/raw/develop/src/assets/images/robot.jpeg)

# **Introduction**
**This is a draft of a final project for an Election Data Science class I took my junior year at the University of Florida, this class was taught by [Michael McDonald](https://twitter.com/ElectProject).**

**For the past couple of elections, I have spent some time reading about how social media has played a role in our elections and more specifically how it's helping or hurting political campaigns. Through my research, I have found some rather alarming ways that political campaigns are using artificial intelligence, and how some companies are offering platform-as-a-service software to political campaigns.**

**I argue that campaigns that use these tactics receive much higher engagements than those who do not, but that these practices can be extremely effective at catching key platform issues, hence the term 'platform-as-a-service' coined from the software-as-a-service term.**

## **Case Study**

Locally, a startup in Gainesville named CharlotteAI, created a technology that uses artificial intelligence to create high engagement Facebook ads at the lowest price. One of the ways that they sell that technology is by consulting with political campaigns to discover issues that are commonly talked about on Facebook in a certain area. Through their service, they are able to identify issues that resonate deeply with constituents and deliver that as a platform to a political campaign. 

Their latest client was the recently elected mayor of Apopka, Bryan Nelson. Through getting in contact with CharlotteAI I was able to receive the data set that was used to identify the most talked about issues in the population segment that they used to help with Nelson's campaign. Nelson's staff had original given them a list of possible terms that they might want to test as main points that their campaign wanted to drive home, I was not given this list but was told that none of the terms given to CharlotteAI were in the top trends. 

Below is a bar graph that shows popular repeating trends according to the data by the amount of times they popped up in the data set:

![Nelson.png](https://github.com/tfaieta/tfaieta.com/raw/develop/src/assets/images/nelsonTrends.png)

After this, CharlotteAI then does another scan of the data in order to gain more insight on the popular words to classify them into having negative (against) or positive (for) connotation trends in order to present those as possible ad campaigns and platform items. Going further into this case study, the technology was able to clearly identify that the red light traffic cameras was something that many people in the area had a real distaste for. CharlotteAI ran with that and created an ad campaign that pushed for the abolishment of red light traffic cameras as a key issue on Bryan Nelson's platform, this is a graph that shows the results of engagement: 

![NelsonEngagement.png](https://github.com/tfaieta/tfaieta.com/raw/develop/src/assets/images/nelsonEngagement.png)

With this Bryan Nelson was able to have a favorable lead against his opponent, the red light camera campaign was only one of three advertisement campaigns that CharlotteAI offered Nelson's campaign, but I did not receive access to the rest of the data or was given much more information. Nelson had a history of being for red light cameras but vowed to take down every red light camera if elected. 

>[Nelson, who had his home annexed into Orange County’s second-biggest city to run for mayor, earned his win by attacking Kilsheimer’s $150,000 salary and his refusal to scrap red-light cameras, which he called a “money grab.” He won handily with 63 percent of the vote.](https://www.orlandosentinel.com/news/orange/os-apopka-winter-park-mayor-election-20180313-story.html)

Change of mind:

![NelsonCOM.png](https://github.com/tfaieta/tfaieta.com/raw/develop/src/assets/images/nelsonCOM.png)


## **How does it work under the hood?**

CharlotteAI's artificial intelligence technology is one of many companies that offer a similar service, and specifically only target Facebook data in order to do much of their work. However, there are many other services that offer similar types of "platform-as-a-service" technologies, curious enough, I wanted to understand how many of these services worked and possibly be able to recreate the effects in a small case study.

First, it is important to note the popular trends of these technologies and how they are being used by political campaigns. 
1. In order to create profiles of voters
2. To target, measure and improve campaigns using big data
3. To automatically generate content 

### **Creating Profiles of Voters**
Political parties have a history of using tactics in order to encourage constituents to vote for a specific candidate. The growth of large data sets and the ability to integrate those large data sets with psychological profiles of people have given the ability to predict personality types, emotional states, and trends according to that in order to aid in persuasion of those people. 

### **Target, measure, improve**
Including the ability to target voters better, these technologies are used to monitor and improve performance of political campaigns. In the commercial sector, a popular methodology for testing, called  A/B testing, which helps companies understand what messaging results in higher click engagement rates and more conversions (i.e. message A or message B) is common. This method is used in a loop, constantly improving and targeting messages more effectively throughout the span of a marketing campaign. Improvements in audience segmentation and cross device targeting mean that specific messages can be tested with specific audiences. The problem of finding messages that are effective and resonate with potential voters has been common to political campaigns for a long time, but previously used to involve static and comprehensive ‘focus group’ testing of a narrow range of messages, each vetted and signed off by senior politicians. The use of social media and commercial advertising techniques has brought to this endeavour a step change in pace and scale. Moore and Tambini describe a ‘dynamic’ process where ‘messages are selected on the basis of their resonance rather than ideological or political selection.’ Tools such as Facebook’s Dynamic Creative, using a set of predefined design features of an advert, can already construct thousands of variations of an advert, present them to users, then find the optimal combinations based on engagement metrics. This is the type of feature that Brad Parscale, Trump’s digital campaign manager, spoke about in a CBS 60 Minutes interview where he claims that his team tested 50,000 to 60,000 ad variations a day.

### **Automatically Generate Content**
One of the most important developments in AI in recent years is the ability to generate content automatically, which raises the possibility of campaigns using programmatically created messaging, developed specifically to convince target audiences. In perhaps the most obvious use case, Natural Language Generation tools could be used alongside algorithmic targeting in order to automatically generate content for unique users based on insight about their interests and concerns. In this case, instead of finding an optimal combination of design features through measuring engagement in the field, a system could use trending
topics, personal data, and an understanding of the interaction between these to generate bespoke and nuanced advertising content. Such campaigns could combine the interactive element of chat bots with
personal data to serve adverts that incorporate a back-and-forth interaction, potentially referencing previous interactions or stated concerns with new generated pieces of content. Taken to its logical conclusion, this could lead to a stream of unique, personalized messages targeted at each voter constantly updated based on A/B testing.  This technology can already been applied in the in the use of commercial chat bots, occasionally acting as pseudo-shopping assistants, or surreptitiously pretending to be humans on social media. As conversational technology improves, particularly in verbal machine-to human communication, talking with a chat bot will feel more natural, and become more personalized. This familiarity could help chat bots find a niche in political communications, employed by campaigns as a 24/7 helpline for policy questions or as a dynamic cheat sheet to help provide quick and informative answers during canvassing. A current example of this can be found in the nonpartisan chat bot HelloVote, which was used in the 2016 US presidential election. It assisted eligible voters to register to vote, checked whether they had registered, and helped them gain the ID required in their state. Users could communicate through text and the HelloVote system either directly filled out online voter registration forms or sent pre-filled forms to the users to submit.

### **Bot Replication**

Still working on it, explain in class.