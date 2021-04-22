

export class ImageFetcher {

    private apiKey: string = '21212178-63f45bee2411a5baefa91a840';
    private API: string = 'https://pixabay.com/api/?key='+this.apiKey;

    public fetchImageFromWord = async (word: string): Promise<string> => {
        
        let response  = await fetch(this.API+"&q="+word+"&image_type=photo&pretty=true")
            .then(response => response.json())
            .catch(error => error);

        return response;
    }

}