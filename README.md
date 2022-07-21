# ChartIt

### Neuphony Frontend Developer Hiring Challenge

  

**Setting up the project -**
1. Fork the repository

2. Clone from the Fork

3. Install node and yarn globally

4. yarn install (will install all dependencies)

5. yarn dev (will start the dev server)

**Submitting the Code -**

1. Create a new branch

2. Once all the the changes are done and tested in local raise a PR

3. Respond via mail with the PR url along with Resume
   >Subject of the mail should be  "Neuphony Frontend Developer Hiring Challenge - Full Name"

**Project Structure**

This is an electron desktop application. Once you start the application in dev mode you should get this ->

![Home Screen](https://i.postimg.cc/bJrTfFTZ/Screenshot-2022-07-15-at-11-42-55-AM.png)

**Go to task** -> Takes to to the Screen where you need to add your React Component. 
![Task Screen](https://i.postimg.cc/zG0NdVPq/Screenshot-2022-07-15-at-11-55-42-AM.png)
Console is opened by default.
In code you only need to take care of the frontend part which is placed at **renderer/pages, renderer/components**\

The task screen above is coming from page **next.jsx**. This is the screen where you will add your component.
In renderer/components there is a basic structure of a Chart you need to implement your own and add it to the next.jsx screen.
- Note - No need to worry about backend and other folders as they are taken care for you.

**Task Description**
* Our device captures raw EEG data in real time and sends it to the software. So to check how the EEG data is actually varying we need to chart it out.
* To emulate the realtime data from the device we are providing the data to frontend i.e. (next.jsx screen) at the same rate as we get from the device.
* Device has eight EEG channels. A single packet from the device contains an array of size 8. Per secod the device return 250 packets. 

**Compulsory Task 1** - Plot the realtime EEG data for one of the eight channels with timestamp on x-axis. Plot at least 5 sec of data at any given moment.
The chart must be updated in realtime

Hint 1 - Rerendering 250 packets per second won't be possible by our machines. To simplify the problem we are returning an array of arrays with 10 packets per 40ms, Therefore each second you will get 25 array of arrays each containing 10 packets. 
Data will look like this- 
>Go thorough the data once to get yourselves familiar 
>You can do that by clicking Fetch Data Stream. 
>You just need to plot one channel, i.e let's say if you're taking 1st channel for each packet you will need to pick the 0th index. --> -1.99...,-2.25...,-2.76..,... as depicted in the image when taking 1st channel.
> 8th index of each packet will be the timestamp

![Data Overview](https://i.postimg.cc/HLwcd3y4/Screenshot-2022-07-15-at-12-50-49-PM.png)

**Additional Task -** 
Plot all 8 channels in 8 graphs stacked vertically.
 > How is that different from plotting one, you ask
 > Well that's what you have to figure out.

**You can use charting library of your choice and are allowed to use any additional node packages.**

If any doubts in the tasks reach me out at ujjwal.madan@neuphony.com
