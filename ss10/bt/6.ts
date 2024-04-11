class Song {
    public readonly id: number;
    name: string;
    length: string;

    constructor(id: number, name: string, length: string) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
}

const song = new Song(1,"khóc cùng em ", "4:23");
console.log(song.id); 
console.log(song.name); 
console.log(song.length); 

