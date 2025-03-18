import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types =[
            // {id:1,name:'Мониторы'},
            // {id:2,name:'Видеокарты'},
            // {id:3,name:'Процессоры'},
            // {id:4,name:'Жесткие диски'},
            // {id:5,name:'Клавиатуры'},
            // {id:6,name:'Наушники'},
            // {id:7,name:'Материнские платы'},
            
        ]
        this._brands =[
            // {id:1,name:'Samsung'},
            // {id:2,name:'MSI'},
            // {id:3,name:'Nvidia'},
            // {id:4,name:'AMD'},
            
        ]
        this._devices =[
            // {id:1,name:'RTX 3050',price:25000,rating:5,img:"https://avatars.mds.yandex.net/i?id=2a0000017a152406cea2fb57e78351e5bf51-4099495-images-thumbs&n=13"},
            // {id:2,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:3,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:4,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:5,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:6,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:7,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
            // {id:8,name:'RTX 3050',price:25000,rating:5,img:"https://img.youtube.com/vi/Gj7sakgc37Q/maxresdefault.jpg"},
        ]

        this._selectedType ={}
        this._selectedBrand ={}
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types=types
    }

    setBrands(brands){
        this._brands=brands
    }
    setDevices(devices){
        this._devices=devices
    }
    

    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }





    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }





    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }



    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }






    

}

