export function tervitusCntrl (request, response) {
  
    response.render("tervitus", {nimi: request.query.nimi || 'tundmatu'})
}

export function indexCntrl (request, response) {
    response.render("index")
}

export function uudisedCntrl (request, response) {
    const uudised = [
        {
            pilt: "https://picsum.photos/300/200?random=1",
            pealkiri: "Uus hooaeg algab võidukalt",
            kokkuvote: "Meie klubi esindusmeeskond alustas uut hooaega suurepärase võiduga koduväljakul. Fännide toetus oli meeletu ja mängijad andsid endast parima."
        },
        {
            pilt: "https://picsum.photos/300/200?random=2",
            pealkiri: "Noortetreeningute ajad muutuvad",
            kokkuvote: "Alates järgmisest kuust toimuvad noortetreeningud uutel kellaaegadel. Palume kõigil lapsevanematel tutvuda uue graafikuga kodulehel."
        },
        {
            pilt: "https://picsum.photos/300/200?random=3",
            pealkiri: "Klubi suvepäevad tulekul",
            kokkuvote: "Ootame kõiki klubiliikmeid ja nende peresid osalema iga-aastastel suvepäevadel. Kavas on sportlikud mängud, grillimine ja palju muud põnevat."
        },
        {
            pilt: "https://picsum.photos/300/200?random=4",
            pealkiri: "Uus sponsorleping allkirjastatud",
            kokkuvote: "Meil on hea meel teatada, et sõlmisime koostöölepingu uue peasponsoriga, mis aitab meil veelgi paremaid tulemusi saavutada."
        },
        {
            pilt: "https://picsum.photos/300/200?random=5",
            pealkiri: "Vabatahtlike otsing",
            kokkuvote: "Otsime oma meeskonda aktiivseid vabatahtlikke, kes aitaksid korraldada kodumänge ja muid üritusi. Tule ja löö kaasa!"
        },
        {
            pilt: "https://picsum.photos/300/200?random=6",
            pealkiri: "Aasta parim mängija valitud",
            kokkuvote: "Eelmise hooaja parimaks mängijaks valiti meie ründaja, kes lõi hooaja jooksul rekordarvu väravaid. Palju õnne!"
        }
    ];
    response.render("uudised", { uudised: uudised });
}
