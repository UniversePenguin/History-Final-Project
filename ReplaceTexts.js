fetch("PageText.json")
    .then(response => response.json())
    .then(json=> {

        for (key of Object.keys(json)) {
            if (document.querySelector(`.EthanText-${key}`)) {
                document.querySelector(`.EthanText-${key}`).innerHTML = json[key];
            }
        }

    })