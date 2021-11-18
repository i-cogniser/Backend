import * as uuid from 'uuid'
import * as path from 'path'


class Fileservice {
    saveFile(file){
        try {
            const fileName = uuid.v4() + '.jpg'
            const filepath = path.resolve('static', fileName)
            file.mv(filepath)
            return fileName

        } catch (e) {
            console.log(e);
        }
    }
}

export default new Fileservice()
