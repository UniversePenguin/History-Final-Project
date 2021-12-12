fetch("PageText.json")
    .then(response => response.json())
    .then(json=> {

        for (key of Object.keys(json)) {
            if (document.querySelector(`.EthanText-${key}`)) {
                document.querySelectorAll(`.EthanText-${key}`).forEach(x => {
                    x.innerHTML = json[key];
                })
            }
        }

    })