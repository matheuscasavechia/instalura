const imgLike = (curtiu) => {
    if (curtiu > 0) {
        return require("../../res/img/s2-checked.png")
    } else {
        return require("../../res/img/s2.png")
    }
}

const likePhoto = (curtiu, likes) => {3
    let qnt = likes;
    if(curtiu){
        qnt--;

    }else{
        qnt++;
    }
    return [!curtiu, qnt];
}

export {imgLike, likePhoto}