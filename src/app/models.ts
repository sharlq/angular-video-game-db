export interface Game{
    id:string;
    background_image:string;
    name: string;
    released:string;
    metacritic_url:string;
    website:string;
    description:string;
    metacritic:number;
    genres:Array<Genere>;
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