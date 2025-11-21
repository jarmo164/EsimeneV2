export function tervitusCntrl (request, response) {
  
    response.render("tervitus", {nimi: request.query.nimi || 'tundmatu'})
}

export function indexCntrl (request, response) {
    response.render("index")
}