if(process.env.NODE_ENV === 'production'){
    //환경변수(위에 프로세스...)
    module.exports = require('./prod');
}else{
    module.exports = require('./dev');
}