---
title: "How Your Data Works"
description: "Learn how GURUKA stores your data locally on your device, what happens when you switch devices or clear your browser, and how to view your stored data."
language: "ko"
---
# How Your Data Works on GURUKA

GURUKA does not require an account, and we do not store any of your data on our servers. Everything you do on GURUKA stays on your own device, inside your web browser. This page explains what that means in plain terms.

## Your data lives on your device

When you use GURUKA, your progress is saved directly inside the browser you are using. This includes:

- Game scores and high scores
- Meditation session history
- Activity tracking data
- Your preferences and settings

This data is not sent anywhere. It is not uploaded to a server. It is not shared with anyone. It exists only on the device and browser where you created it.

## What happens on a different device or browser

Because your data is stored on your device, it is not available anywhere else. If you open GURUKA on a different phone, computer, or tablet, you will start fresh. The same applies if you use a different browser on the same device. For example, if you use Chrome on your laptop and then open GURUKA in Safari, your Chrome data will not appear in Safari.

This is the trade-off for not requiring an account: your data is completely private, but it does not follow you between devices.

## What happens when you clear your browser data

If you clear your browser's cache, cookies, or site data, your GURUKA data will be deleted. This is the same as what happens with any website that stores data locally. Most browsers let you clear data for specific sites without affecting others, but if you do a full cache clear, your GURUKA progress will be removed.

**To keep your data safe:** avoid clearing site data for guruka.com specifically, or be aware that a full browser cache clear will reset your GURUKA progress.

## No account means no data recovery

Since GURUKA does not have accounts or cloud storage, there is no way to recover your data once it is deleted. There is no "forgot password" or "restore from backup" option because no backup exists. Your data is fully in your hands.

## Why we chose this approach

Most apps and websites ask you to create an account so they can store your data on their servers. That is convenient for syncing across devices, but it also means the company has access to your personal information, usage patterns, and habits.

We chose a different path. GURUKA stores everything locally so that:

- **Your data is truly private** - we cannot see it, sell it, or lose it in a data breach
- **No sign-up is needed** - you can start meditating or playing games immediately
- **No tracking** - we do not use advertising pixels or third-party analytics
- **You are in full control** - you can delete your data at any time by clearing your browser storage

## For technical users: how to view your data

GURUKA stores data using your browser's **localStorage**. You can inspect it directly:

1. Open GURUKA in your browser (e.g. [guruka.com/games/](https://guruka.com/games/))
2. Open Developer Tools (press **F12** or **Ctrl+Shift+I** on Windows/Linux, **Cmd+Option+I** on Mac)
3. Go to the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox)
4. In the left sidebar, expand **Local Storage** and click on **https://guruka.com**
5. You will see all stored keys and values: game scores, meditation history, preferences, and activity data

All keys are prefixed with `guruka_` so they are easy to identify. You can edit or delete individual entries, or right-click and choose "Clear" to remove everything.

## Questions?

If you have questions about how your data is handled, see our [Privacy Policy](/privacy/) or [contact us](https://docs.google.com/forms/d/e/1FAIpQLSe1ECOGIxdixwDDVyQqCgPRctD83_jqwEp-6bhysm8gu8uZKA/viewform).