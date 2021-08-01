export interface Game{
    background_image:string;
    name: string;
    released:string;
    matecritic_url:string;
    website:string;
    description:string;
    metacritic:number;
    generes:Array<Genere>;
    parent_platforms:Array<ParentPlatform>;
    publishers:Array<Rating>;
    screenshots:Array<Screenshots>;
    trailers:Array<Trailer>;
}

export interface APIResponse<T>{
    results:Array<T>;
}

interface Genere{
    name: string;
}
interface ParentPlatform{
    platform:{
        slug:string;
    };
}
interface Publishers{
    name:string;
}
interface Rating{
    id:number;
    xount:number;
    title:string;
}
interface Screenshots{
    image:string;
}
interface Trailer{
    data:{
        max:string;
    }    
}