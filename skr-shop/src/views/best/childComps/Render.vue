<template>
    <div>
        <list-top :imgArrTop="imgArrTop"></list-top>
        <list-middle :imgArrMiddle="imgArrMiddle"></list-middle>
        <list-bottom :imgArrBottom="imgArrBottom"></list-bottom>
    </div>
</template>

<script>
import ListTop from "./childComps/ListTop";
import ListMiddle from "./childComps/ListMiddle";
import ListBottom from "./childComps/ListBottom";
export default {
    components: {
        ListTop,
        ListMiddle,
        ListBottom,
    },
    data() {
        return {
            imgArrTop: {
                num: 0,
                imgs: [
                    "//image.wconcept.co.kr/productimg/image/img1/44/300844144.jpg",
                    "//image.wconcept.co.kr/productimg/image/img1/65/300904165.jpg",
                    "//image.wconcept.co.kr/productimg/image/img1/15/301178515.jpg",
                ],
            },

            imgArrMiddle: {
                num: 0,
                imgs: [
                    "//image.wconcept.co.kr/productimg/image/img1/64/301022664.jpg?RS=384",
                    "//image.wconcept.co.kr/productimg/image/img1/74/301079774.jpg?RS=384",
                    "//image.wconcept.co.kr/productimg/image/img1/11/301230111.jpg?RS=384",
                    "//image.wconcept.co.kr/productimg/image/img1/03/300979603.jpg?RS=384",
                ],
            },
            imgArrBottom: {
                num: 0,
                imgs:[
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/57/301252257.jpg?RS=300",
                "//image.wconcept.co.kr/productimg/image/img1/04/301193004.jpg?RS=300",
            ]
            }
            
            
        };
    },
    created(){
        this.imgArrMiddle.num = this.imgArrTop.imgs.length + 1,
        this.imgArrBottom.num = this.imgArrMiddle.num + this.imgArrMiddle.imgs.length
    }
};
</script>

<style>
</style>