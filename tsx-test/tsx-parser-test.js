const esprima=require('../dist/esprima');
const fs=require('fs');

describe('esprima.parse',()=>{
    it('should parse a valid tsx file',(done)=>{
        fs.readFile('../../admin/src/components/QuestionnaireCard/QuestionnaireCard.tsx','utf-8',(err,data)=>{
            var program=esprima.parseModule(data,{jsx:true});
            console.log(JSON.stringify(program));
            done();
        })
    })
})