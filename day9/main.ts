'use strict';

export default {
    part1(file: string): number {
        // odd numbers are file? even numbers are empty space
        // 1 2 3   4   5
        // 0..111....22222
        //2  3  3  3 1 3  3 121  4  1  4 1 3 1 40 2
        //00...111...2...333.44.5555.6666.777.888899

        interface filesystem {
            id: number,
            size:number, 
            filled:boolean 
        }
        let files: filesystem[] = []
        let filesystem: string[] = []
        let chars = file.split("")
        let fileId = 0
        chars.forEach((char, id) => {
            if (id % 2 == 0) {
                for (let i = 0; i < parseInt(char); i++) {
                    filesystem.push(fileId.toString())                    
                }
                fileId++
            } else {
                for (let i = 0; i < parseInt(char); i++) {
                    filesystem.push(".")                    
                }
            }
            
        });
        console.log(filesystem);
        let compacted = compactFilesystem(filesystem)
        let sum = 0
        compacted.forEach((file, id) => {
            if (file !== ".") 
                sum = (parseInt(file) * id) + sum
            
        })

        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function compactFilesystem(files:string[]):string[] {
    //find the first empty "."
    // replace that with the last item
    console.log(files);
    let empty = files.findIndex((element) => element == ".");

    let reverse = [...files]
    reverse.reverse()
    reverse.forEach((file, id) => {
        if (file !== ".") {
            //men vad är mitt id?
            let myId = files.length - id - 1
            
            // oj detta är en siffra
            // denna ska då placeras på första bästa platsen i files arra
            empty = files.findIndex((element) => element == ".");

            // myId has to appear after empty
            if (myId > empty) {
                files[empty] = file
                // console.log(myId);
                files[myId] = "."
            }

            
        }
    })
    console.log(files);
    
    
    return files
}