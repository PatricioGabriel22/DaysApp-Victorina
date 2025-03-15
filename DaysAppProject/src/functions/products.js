// const listaProductos = [...new Set(AuxlistaProductos)].map(product => product.trim()).map(target => target === "Ensaladas 4 quesos"? target = "Empanadas 4 quesos":target)
const nuevalistaProductos = [{
  "_id": {
    "$oid": "67c7677e19aca535ea59ed47"
  },
  "productName": "Flautas",
  "fechaInicio": "03/03/2025",
  "cantidad": 3.9,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7679719aca535ea59ed4c"
  },
  "productName": "Minion",
  "fechaInicio": "03/03/2025",
  "cantidad": 5.7,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c767ab19aca535ea59ed51"
  },
  "productName": "Figasas",
  "fechaInicio": "03/03/2025",
  "cantidad": 2.15,
  "unidades": "kilos",
  "precio": 3900,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c768b219aca535ea59ed62"
  },
  "productName": "Pizza muzza",
  "fechaInicio": "04/03/2025",
  "cantidad": 4,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c768dc19aca535ea59ed6c"
  },
  "productName": "Palmeritas",
  "fechaInicio": "04/03/2025",
  "cantidad": 37,
  "unidades": "paquetes",
  "precio": 3200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78b0bc3a46981f1594c9b"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "04/03/2025",
  "cantidad": 30,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b09c818ce96997d9ddef"
  },
  "productName": "Pan negro",
  "fechaInicio": "05/03/2025",
  "cantidad": 7.98,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b332818ce96997d9de17"
  },
  "productName": "Scon naranja",
  "fechaInicio": "05/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2100,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b3af818ce96997d9de26"
  },
  "productName": "Empanadas capresse",
  "fechaInicio": "05/03/2025",
  "cantidad": 18,
  "unidades": "unidades",
  "precio": 1750,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b3c0818ce96997d9de2b"
  },
  "productName": "Empanadas arabes",
  "fechaInicio": "05/03/2025",
  "cantidad": 24,
  "unidades": "unidades",
  "precio": 2300,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8dd46a7f20cfc735ccadd"
  },
  "productName": "Figasas",
  "fechaInicio": "05/03/2025",
  "cantidad": 7.205,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8dd66a7f20cfc735ccae2"
  },
  "productName": "Minion",
  "fechaInicio": "05/03/2025",
  "cantidad": 6.865,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c9dcec851a356c84c968c6"
  },
  "productName": "Medialunas jamon y queso",
  "fechaInicio": "22/07/2025",
  "cantidad": 5,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce0cf487b889f28666c551"
  },
  "productName": "Chpacitos",
  "fechaInicio": "05/03/2025",
  "cantidad": 6.13,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce0f7487b889f28666c569"
  },
  "productName": "Chipacitos",
  "fechaInicio": "06/03/2025",
  "cantidad": 6.13,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce102787b889f28666c57b"
  },
  "productName": "Pan negro",
  "fechaInicio": "06/03/2025",
  "cantidad": 3.45,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce106f87b889f28666c585"
  },
  "productName": "Pastra frola",
  "fechaInicio": "06/03/2025",
  "cantidad": 12,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce108487b889f28666c58a"
  },
  "productName": "Ricota chica",
  "fechaInicio": "06/03/2025",
  "cantidad": 6,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce10ee87b889f28666c59e"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "06/03/2025",
  "cantidad": 55,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce1fbcdca2a515c1ff1083"
  },
  "productName": "Canoncitos",
  "fechaInicio": "09/03/2025",
  "cantidad": 20,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c953a845f791f684920c"
  },
  "productName": "Criollos",
  "fechaInicio": "11/03/2025",
  "cantidad": 11.5,
  "unidades": "kilos",
  "precio": 6000,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c9fba845f791f6849227"
  },
  "productName": "Scones jamon y queso",
  "fechaInicio": "11/03/2025",
  "cantidad": 18,
  "unidades": "paquetes",
  "precio": 3900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cae4a845f791f6849245"
  },
  "productName": "Ricota chica ddl",
  "fechaInicio": "11/03/2025",
  "cantidad": 3,
  "unidades": "unidades",
  "precio": 12900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cc78a845f791f6849263"
  },
  "productName": "Culitos",
  "fechaInicio": "11/03/2025",
  "cantidad": 60,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cc89a845f791f6849268"
  },
  "productName": "Sacramentos",
  "fechaInicio": "11/03/2025",
  "cantidad": 60,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cca9a845f791f684926d"
  },
  "productName": "Negritas",
  "fechaInicio": "11/03/2025",
  "cantidad": 60,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234070b566d4c0f11c318"
  },
  "productName": "Fiagasas chicas",
  "fechaInicio": "12/03/2025",
  "cantidad": 6.4,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234170b566d4c0f11c31d"
  },
  "productName": "Figasas",
  "fechaInicio": "12/03/2025",
  "cantidad": 15.2,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d2347e0b566d4c0f11c329"
  },
  "productName": "Scones pasas uva",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d235400b566d4c0f11c347"
  },
  "productName": "Budines chips",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 4900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d235ad0b566d4c0f11c363"
  },
  "productName": "Budin naranja",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d235c30b566d4c0f11c368"
  },
  "productName": "Budin marmolado",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d235d20b566d4c0f11c36d"
  },
  "productName": "Budin amapola",
  "fechaInicio": "12/03/2025",
  "cantidad": 8,
  "unidades": "paquetes",
  "precio": 5900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7666919aca535ea59ed11"
  },
  "productName": "Chipacitos",
  "fechaInicio": "03/03/2025",
  "cantidad": 7.35,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c766aa19aca535ea59ed1d"
  },
  "productName": "Flautas",
  "fechaInicio": "03/03/2025",
  "cantidad": 14.98,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c766e419aca535ea59ed27"
  },
  "productName": "Rocetas",
  "fechaInicio": "03/03/2025",
  "cantidad": 8.96,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7687b19aca535ea59ed58"
  },
  "productName": "Chipacitos",
  "fechaInicio": "04/03/2025",
  "cantidad": 7.975,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7689b19aca535ea59ed5d"
  },
  "productName": "Medialunas jamon y queso",
  "fechaInicio": "04/03/2025",
  "cantidad": 10,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b059818ce96997d9ddea"
  },
  "productName": "Prepizza tomate (x2)",
  "fechaInicio": "05/03/2025",
  "cantidad": 16,
  "unidades": "paquetes",
  "precio": 3200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b2a1818ce96997d9de08"
  },
  "productName": "Bizcochos ",
  "fechaInicio": "05/03/2025",
  "cantidad": 23,
  "unidades": "paquetes",
  "precio": 1690,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b2ee818ce96997d9de0d"
  },
  "productName": "Pan mode blanco",
  "fechaInicio": "05/03/2025",
  "cantidad": 6,
  "unidades": "paquetes",
  "precio": 5500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8dd7fa7f20cfc735ccae7"
  },
  "productName": "Flautas",
  "fechaInicio": "05/03/2025",
  "cantidad": 6.415,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8dda1a7f20cfc735ccaec"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "05/03/2025",
  "cantidad": 190,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8e085a7f20cfc735ccafc"
  },
  "productName": "Minion",
  "fechaInicio": "04/03/2025",
  "cantidad": 2.3,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce0fc587b889f28666c576"
  },
  "productName": "Criollos",
  "fechaInicio": "06/03/2025",
  "cantidad": 9.98,
  "unidades": "kilos",
  "precio": 6000,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce20a0dca2a515c1ff1098"
  },
  "productName": "Miniones",
  "fechaInicio": "09/03/2025",
  "cantidad": 3.915,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c76ea845f791f68491f2"
  },
  "productName": "Minion",
  "fechaInicio": "11/03/2025",
  "cantidad": 19.8,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c882a845f791f68491fe"
  },
  "productName": "Figasas chicas",
  "fechaInicio": "11/03/2025",
  "cantidad": 6,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cabca845f791f6849240"
  },
  "productName": "Ricota grande",
  "fechaInicio": "11/03/2025",
  "cantidad": 3,
  "unidades": "unidades",
  "precio": 12900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cbc7a845f791f684924a"
  },
  "productName": "Ricota grande ddl",
  "fechaInicio": "11/03/2025",
  "cantidad": 3,
  "unidades": "unidades",
  "precio": 14900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cbe2a845f791f684924f"
  },
  "productName": "Pan molde blanco",
  "fechaInicio": "11/03/2025",
  "cantidad": 6,
  "unidades": "unidades",
  "precio": 5500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cc2ba845f791f6849254"
  },
  "productName": "Facturas",
  "fechaInicio": "11/03/2025",
  "cantidad": 58,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d233e80b566d4c0f11c313"
  },
  "productName": "Fautas",
  "fechaInicio": "12/03/2025",
  "cantidad": 17.75,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234af0b566d4c0f11c333"
  },
  "productName": "Scon chips choco",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234df0b566d4c0f11c33d"
  },
  "productName": "Pan arabe blanco",
  "fechaInicio": "12/03/2025",
  "cantidad": 10,
  "unidades": "paquetes",
  "precio": 1600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d235e00b566d4c0f11c372"
  },
  "productName": "Budin limon",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d236350b566d4c0f11c381"
  },
  "productName": "Relleno carne y pollo",
  "fechaInicio": "12/03/2025",
  "cantidad": 1,
  "unidades": "unidades",
  "precio": 1,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7673219aca535ea59ed3b"
  },
  "productName": "Empanadas jamon y queso",
  "fechaInicio": "03/03/2025",
  "cantidad": 30,
  "unidades": "unidades",
  "precio": 1750,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c768ef19aca535ea59ed71"
  },
  "productName": "Pepas",
  "fechaInicio": "04/03/2025",
  "cantidad": 41,
  "unidades": "paquetes",
  "precio": 3200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c789cbc3a46981f1594c74"
  },
  "productName": "Tarta de manzana chica",
  "fechaInicio": "04/03/2025",
  "cantidad": 7,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c789e5c3a46981f1594c79"
  },
  "productName": "Tarta de manzana grande",
  "fechaInicio": "04/03/2025",
  "cantidad": 2,
  "unidades": "unidades",
  "precio": 12900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78a08c3a46981f1594c7e"
  },
  "productName": "Merengue",
  "fechaInicio": "04/03/2025",
  "cantidad": 3,
  "unidades": "paquetes",
  "precio": 3900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78aa1c3a46981f1594c8a"
  },
  "productName": "Flautas",
  "fechaInicio": "04/03/2025",
  "cantidad": 5.14,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78ac2c3a46981f1594c8f"
  },
  "productName": "Rosetas",
  "fechaInicio": "04/03/2025",
  "cantidad": 5.455,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78b1dc3a46981f1594ca0"
  },
  "productName": "Facturas",
  "fechaInicio": "04/03/2025",
  "cantidad": 40,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b009818ce96997d9dde0"
  },
  "productName": "Medialunas jamon y queso",
  "fechaInicio": "05/03/2025",
  "cantidad": 10,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b1ed818ce96997d9ddfe"
  },
  "productName": "Scon pasas de uva",
  "fechaInicio": "05/03/2025",
  "cantidad": 8,
  "unidades": "paquetes",
  "precio": 2490,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b34d818ce96997d9de1c"
  },
  "productName": "Empanadas pollo",
  "fechaInicio": "05/03/2025",
  "cantidad": 16,
  "unidades": "unidades",
  "precio": 1590,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b3d7818ce96997d9de30"
  },
  "productName": "Empanadas jamon y queso",
  "fechaInicio": "05/03/2025",
  "cantidad": 18,
  "unidades": "unidades",
  "precio": 1750,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8dd2ca7f20cfc735ccad8"
  },
  "productName": "Rosetas",
  "fechaInicio": "05/03/2025",
  "cantidad": 4.04,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce0ed087b889f28666c55c"
  },
  "productName": "Medialunas jamon y queso",
  "fechaInicio": "05/03/2025",
  "cantidad": 10,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce10c287b889f28666c594"
  },
  "productName": "Figasas",
  "fechaInicio": "06/03/2025",
  "cantidad": 1.6,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce10d487b889f28666c599"
  },
  "productName": "Facturas",
  "fechaInicio": "06/03/2025",
  "cantidad": 40,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce1f33dca2a515c1ff106f"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "09/03/2025",
  "cantidad": 288,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce1f6cdca2a515c1ff1074"
  },
  "productName": "Figuras",
  "fechaInicio": "09/03/2025",
  "cantidad": 88,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce1f89dca2a515c1ff1079"
  },
  "productName": "Culitos",
  "fechaInicio": "09/03/2025",
  "cantidad": 30,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c8c1a845f791f6849205"
  },
  "productName": "Rocetas",
  "fechaInicio": "11/03/2025",
  "cantidad": 8.96,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c969a845f791f6849211"
  },
  "productName": "Pizza muzarella",
  "fechaInicio": "11/03/2025",
  "cantidad": 5,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c992a845f791f6849216"
  },
  "productName": "Empanadas jamon y queso",
  "fechaInicio": "11/03/2025",
  "cantidad": 16,
  "unidades": "unidades",
  "precio": 1750,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c9c0a845f791f684921b"
  },
  "productName": "Empanadas pollo",
  "fechaInicio": "11/03/2025",
  "cantidad": 18,
  "unidades": "kilos",
  "precio": 1590,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c9d9a845f791f6849220"
  },
  "productName": "Empanadas carne",
  "fechaInicio": "11/03/2025",
  "cantidad": 30,
  "unidades": "unidades",
  "precio": 1590,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0ca8ca845f791f6849236"
  },
  "productName": "Avena limon",
  "fechaInicio": "11/03/2025",
  "cantidad": 22,
  "unidades": "paquetes",
  "precio": 3400,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0ccc2a845f791f6849272"
  },
  "productName": "Canoncitos",
  "fechaInicio": "11/03/2025",
  "cantidad": 40,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234480b566d4c0f11c324"
  },
  "productName": "Rosetas",
  "fechaInicio": "12/03/2025",
  "cantidad": 10.64,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d236070b566d4c0f11c377"
  },
  "productName": "Blister oreo",
  "fechaInicio": "12/03/2025",
  "cantidad": 18,
  "unidades": "paquetes",
  "precio": 4900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d2361e0b566d4c0f11c37c"
  },
  "productName": "Medialunas jamon y queso",
  "fechaInicio": "12/03/2025",
  "cantidad": 9,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d2364c0b566d4c0f11c386"
  },
  "productName": "Empanadas carne",
  "fechaInicio": "12/03/2025",
  "cantidad": 26,
  "unidades": "unidades",
  "precio": 1690,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d236b90b566d4c0f11c397"
  },
  "productName": "Scones frutos secos",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7668a19aca535ea59ed18"
  },
  "productName": "Minion",
  "fechaInicio": "03/03/2025",
  "cantidad": 22.5,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c766d119aca535ea59ed22"
  },
  "productName": "Figasas",
  "fechaInicio": "03/03/2025",
  "cantidad": 12.6,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7671219aca535ea59ed36"
  },
  "productName": "Pan molde salvado con almendra",
  "fechaInicio": "03/03/2025",
  "cantidad": 10,
  "unidades": "unidades",
  "precio": 5500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c7676919aca535ea59ed42"
  },
  "productName": "Figasas",
  "fechaInicio": "03/03/2025",
  "cantidad": 3.6,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c768ca19aca535ea59ed67"
  },
  "productName": "Cuernitos",
  "fechaInicio": "04/03/2025",
  "cantidad": 23,
  "unidades": "paquetes",
  "precio": 2090,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c78a6bc3a46981f1594c83"
  },
  "productName": "Figasas",
  "fechaInicio": "04/03/2025",
  "cantidad": 9.54,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8afcf818ce96997d9ddd9"
  },
  "productName": "Chipacitos",
  "fechaInicio": "05/03/2025",
  "cantidad": 5.29,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b039818ce96997d9dde5"
  },
  "productName": "Pizzetas tomate (x12)",
  "fechaInicio": "05/03/2025",
  "cantidad": 15,
  "unidades": "paquetes",
  "precio": 3200,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b160818ce96997d9ddf4"
  },
  "productName": "Pebetes ",
  "fechaInicio": "05/03/2025",
  "cantidad": 24,
  "unidades": "paquetes",
  "precio": 875,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b1cb818ce96997d9ddf9"
  },
  "productName": "Scons chips chocolate",
  "fechaInicio": "05/03/2025",
  "cantidad": 8,
  "unidades": "paquetes",
  "precio": 2490,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b20a818ce96997d9de03"
  },
  "productName": "Bizcochos jamon y queso",
  "fechaInicio": "05/03/2025",
  "cantidad": 24,
  "unidades": "paquetes",
  "precio": 2090,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b319818ce96997d9de12"
  },
  "productName": "Scones frutos secos",
  "fechaInicio": "05/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2490,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8b399818ce96997d9de21"
  },
  "productName": "Empanadas cebolla",
  "fechaInicio": "05/03/2025",
  "cantidad": 20,
  "unidades": "unidades",
  "precio": 1990,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67c8ddb9a7f20cfc735ccaf1"
  },
  "productName": "Facturas",
  "fechaInicio": "05/03/2025",
  "cantidad": 80,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce0eb187b889f28666c557"
  },
  "productName": "Criollos",
  "fechaInicio": "05/03/2025",
  "cantidad": 9.85,
  "unidades": "kilos",
  "precio": 6000,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce104887b889f28666c580"
  },
  "productName": "Coquitos",
  "fechaInicio": "06/03/2025",
  "cantidad": 15,
  "unidades": "paquetes",
  "precio": 3900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce109a87b889f28666c58f"
  },
  "productName": "Ricota grande",
  "fechaInicio": "06/03/2025",
  "cantidad": 4,
  "unidades": "unidades",
  "precio": 12900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce1fa9dca2a515c1ff107e"
  },
  "productName": "Sacramentos",
  "fechaInicio": "09/03/2025",
  "cantidad": 30,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67ce20bbdca2a515c1ff109d"
  },
  "productName": "Figasas",
  "fechaInicio": "09/03/2025",
  "cantidad": 9.61,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c738a845f791f68491e3"
  },
  "productName": "Flautas",
  "fechaInicio": "11/03/2025",
  "cantidad": 15.36,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0c866a845f791f68491f9"
  },
  "productName": "Figasas",
  "fechaInicio": "11/03/2025",
  "cantidad": 21.7,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0ca0fa845f791f684922c"
  },
  "productName": "Cuernitos",
  "fechaInicio": "11/03/2025",
  "cantidad": 27,
  "unidades": "paquetes",
  "precio": 2090,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0ca7aa845f791f6849231"
  },
  "productName": "Avena naranja",
  "fechaInicio": "11/03/2025",
  "cantidad": 24,
  "unidades": "paquetes",
  "precio": 3400,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0caa1a845f791f684923b"
  },
  "productName": "Ricota chica",
  "fechaInicio": "11/03/2025",
  "cantidad": 3,
  "unidades": "unidades",
  "precio": 9900,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cc55a845f791f6849259"
  },
  "productName": "Medialunas de manteca",
  "fechaInicio": "11/03/2025",
  "cantidad": 480,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d0cc66a845f791f684925e"
  },
  "productName": "Figuras",
  "fechaInicio": "11/03/2025",
  "cantidad": 172,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234cc0b566d4c0f11c338"
  },
  "productName": "Scon naranja",
  "fechaInicio": "12/03/2025",
  "cantidad": 7,
  "unidades": "paquetes",
  "precio": 2100,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d234ee0b566d4c0f11c342"
  },
  "productName": "Pan arabe negro",
  "fechaInicio": "12/03/2025",
  "cantidad": 10,
  "unidades": "unidades",
  "precio": 1600,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d236600b566d4c0f11c38b"
  },
  "productName": "Empanadas arabe",
  "fechaInicio": "12/03/2025",
  "cantidad": 24,
  "unidades": "bagueteras",
  "precio": 2300,
  "sobro": false,
  "__v": 0,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  }
},
{
  "_id": {
    "$oid": "67d4473bd888292425736526"
  },
  "productName": "Test 1",
  "fechaInicio": "14/03/2025",
  "cantidad": 1,
  "unidades": "bagueteras",
  "precio": 1,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48758252b5b640e055701"
  },
  "productName": "Chipacitos",
  "fechaInicio": "13/03/2025",
  "cantidad": 4.58,
  "unidades": "kilos",
  "precio": 15600,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d487d5252b5b640e055707"
  },
  "productName": "Minion",
  "fechaInicio": "13/03/2025",
  "cantidad": 21.5,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d487f6252b5b640e05570f"
  },
  "productName": "Flautas",
  "fechaInicio": "13/03/2025",
  "cantidad": 15.68,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d4881d252b5b640e055715"
  },
  "productName": "Figasas",
  "fechaInicio": "13/03/2025",
  "cantidad": 17.5,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48832252b5b640e05571b"
  },
  "productName": "Figasas chicas",
  "fechaInicio": "13/03/2025",
  "cantidad": 16.4,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48845252b5b640e055721"
  },
  "productName": "Rosetas",
  "fechaInicio": "13/03/2025",
  "cantidad": 8,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d4885b252b5b640e055727"
  },
  "productName": "Criollos",
  "fechaInicio": "13/03/2025",
  "cantidad": 13.91,
  "unidades": "kilos",
  "precio": 6000,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d4886c252b5b640e05572d"
  },
  "productName": "Cuernitos",
  "fechaInicio": "13/03/2025",
  "cantidad": 26,
  "unidades": "paquetes",
  "precio": 2090,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d488cd252b5b640e055733"
  },
  "productName": "Bizcochitos jamon y queso",
  "fechaInicio": "13/03/2025",
  "cantidad": 28,
  "unidades": "paquetes",
  "precio": 2090,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d488e7252b5b640e055739"
  },
  "productName": "Pan molde salvado",
  "fechaInicio": "13/03/2025",
  "cantidad": 10,
  "unidades": "unidades",
  "precio": 4500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48902252b5b640e05573f"
  },
  "productName": "Tarta manzana chica ",
  "fechaInicio": "13/03/2025",
  "cantidad": 6,
  "unidades": "unidades",
  "precio": 10500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48916252b5b640e055745"
  },
  "productName": "Tarta manzana grande",
  "fechaInicio": "13/03/2025",
  "cantidad": 3,
  "unidades": "unidades",
  "precio": 13500,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d4894c252b5b640e055751"
  },
  "productName": "Anillos maicena chocolate blister",
  "fechaInicio": "13/03/2025",
  "cantidad": 14,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48a16252b5b640e05575d"
  },
  "productName": "Alf. maicna blister",
  "fechaInicio": "13/03/2025",
  "cantidad": 34,
  "unidades": "paquetes",
  "precio": 4200,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48a30252b5b640e055763"
  },
  "productName": "Morron conserva",
  "fechaInicio": "13/03/2025",
  "cantidad": 1,
  "unidades": "unidades",
  "precio": 1,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48a42252b5b640e055769"
  },
  "productName": "Morron p/ freezar",
  "fechaInicio": "13/03/2025",
  "cantidad": 1,
  "unidades": "unidades",
  "precio": 1,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48bcb252b5b640e05576f"
  },
  "productName": "Figasas",
  "fechaInicio": "13/03/2025",
  "cantidad": 2.11,
  "unidades": "kilos",
  "precio": 3500,
  "sobro": true,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48bee252b5b640e055775"
  },
  "productName": "Flautas",
  "fechaInicio": "13/03/2025",
  "cantidad": 3.26,
  "unidades": "kilos",
  "precio": 2600,
  "sobro": true,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48c03252b5b640e05577b"
  },
  "productName": "Facturas",
  "fechaInicio": "13/03/2025",
  "cantidad": 48,
  "unidades": "unidades",
  "precio": 48,
  "sobro": true,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48c1a252b5b640e055781"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "13/03/2025",
  "cantidad": 14,
  "unidades": "unidades",
  "precio": 650,
  "sobro": true,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
},
{
  "_id": {
    "$oid": "67d48e0e252b5b640e05578b"
  },
  "productName": "Medialunas manteca",
  "fechaInicio": "13/03/2025",
  "cantidad": 270,
  "unidades": "unidades",
  "precio": 650,
  "sobro": false,
  "local": {
    "$oid": "67d1aed8a440973ee4f0ef37"
  },
  "__v": 0
}]



const listaProductosfiltrada = [...new Set(nuevalistaProductos.map(item=>item.productName))]

export const ListaProductos =  [
  'Flautas',
  'Minion',
  'Figasas',
  'Pizza muzza',       
  'Palmeritas',        
  'Medialunas manteca',
  'Pan negro',
  'Scon naranja',      
  'Empanadas capresse',
  'Empanadas arabes',
  'Medialunas jamon y queso',
  'Chpacitos',
  'Chipacitos',
  'Pastra frola',
  'Ricota chica',
  'Canoncitos',
  'Criollos',
  'Scones jamon y queso',
  'Ricota chica ddl',
  'Culitos',
  'Sacramentos',
  'Negritas',
  'Fiagasas chicas',
  'Scones pasas uva',
  'Budines chips',
  'Budin naranja',
  'Budin marmolado',
  'Budin amapola',
  'Rocetas',
  'Prepizza tomate (x2)',
  'Bizcochos ',
  'Pan mode blanco',
  'Miniones',
  'Figasas chicas',
  'Ricota grande',
  'Ricota grande ddl',
  'Pan molde blanco',
  'Facturas',
  'Fautas',
  'Scon chips choco',
  'Pan arabe blanco',
  'Budin limon',
  'Relleno carne y pollo',
  'Empanadas jamon y queso',
  'Pepas',
  'Tarta de manzana chica',
  'Tarta de manzana grande',
  'Merengue',
  'Rosetas',
  'Scon pasas de uva',
  'Empanadas pollo',
  'Figuras',
  'Pizza muzarella',
  'Empanadas carne',
  'Avena limon',
  'Blister oreo',
  'Scones frutos secos',
  'Pan molde salvado con almendra',
  'Cuernitos',
  'Pizzetas tomate (x12)',
  'Pebetes ',
  'Scons chips chocolate',
  'Bizcochos jamon y queso',
  'Empanadas cebolla',
  'Coquitos',
  'Avena naranja',
  'Medialunas de manteca',
  'Pan arabe negro',
  'Empanadas arabe',
  'Test 1',
  'Bizcochitos jamon y queso',
  'Pan molde salvado',
  'Tarta manzana chica ',
  'Tarta manzana grande',
  'Anillos maicena chocolate blister',
  'Alf. maicna blister',
  'Morron conserva',
  'Morron p/ freezar'
]
// const ListaProductosSinDuplicados = [...new Set(ListaProductos)]


console.log(listaProductosfiltrada)