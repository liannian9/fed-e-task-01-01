export{} //确保不于与其他文件变量冲突

interface Post {
    title:string;
    content?:string;
    readonly subtitle:string
}

function iter(post:Post) {
    console.log(post.title);
    console.log(post.content);
    // post.subtitle = "sss" 只读不能修改
}
iter({
    title:'title',
    content:'content',
    subtitle:'subtitle'
})
iter({
    title:'title',
    subtitle:'subtitle'

})

interface Prop {
    [props:string] :string

}
let obj:Prop = {};

obj.aaa = 'aa'
obj[1] = 'sss'
