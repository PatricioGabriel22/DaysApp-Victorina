
export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function browserAction(target,dataToBrowse){

    const targetNoAccents = removeAccents(target.toLowerCase())
    const filter = dataToBrowse.filter(item => removeAccents(item.productName).toLowerCase().includes(targetNoAccents))

    return filter


}