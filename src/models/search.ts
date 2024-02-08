
export interface IName {
    name : string;
}

export interface IVideo {
    video_id: number;
    title: string;
    description : string;
    image: string;
    created_at : Date;
    name : string;
    content : string;
    user : string;
    tag : IName[];
}
