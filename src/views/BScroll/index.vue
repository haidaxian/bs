<template>
    <div style="width: 100%;height: 100%;">
        <div class="BScrollBox" ref="BScroll">
            <div>
                <input type="text">
                <van-field label="文本" placeholder="请输入用户名"/>
                <p v-for="(item,index) in list" class="home-text" :key="index">
                    <span class="home-order">{{ index }}</span>
                    <span>一束光照进铁塔，铁塔里的肮脏龌龊被显现，这束光便有了罪。</span>
                </p>
                <!-- |Start 上拉加载提示| -->
                <div class="loadingMore" v-if="isUpLoad">
                    <img v-if="isUpLoading" src="../../assets/img/loading.gif" alt="">
                    <p>{{ loadingText }}</p>
                </div>
                <!-- |End 上拉加载提示| -->
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Pullup from '@better-scroll/pull-up'
    // 注册插件
    BScroll.use(Pullup)

    import {Field} from 'vant';

    export default {
        name: 'BScroll',
        components: {
            vanField: Field
        },
        created() {
            this.$nextTick(() => {
                this.$toast.loading({
                    message: '加载中...',
                    forbidClick: true,
                    duration: 0,
                    loadingType: 'spinner'
                });
            })
            this.getData()
        },
        beforeDestroy() {
            this.$toast.clear()
        },
        data() {
            return {
                BScroll: null,
                isUpLoad: false,
                isUpLoading: false,
                loadingText: '上拉加载更多',
                records: 200,
                page: 1,
                pageSize: 30,
                list: []
            }
        },
        methods: {
            getData() {
                // 请求数据
                setTimeout(() => {
                    // 请求成功
                    this.isUpLoading = false
                    if (this.records > this.pageSize) {
                        this.isUpLoad = true
                    } else {
                        this.isUpLoad = false
                    }
                    if (this.page * this.pageSize >= this.records) {
                        this.loadingText = '没有更多数据了'
                    } else {
                        this.loadingText = '上拉加载更多...'
                    }
                    for (let i = 1; i <= this.pageSize; i++) {
                        this.list.push(i * this.page)
                    }
                    this.$nextTick(() => {
                        this.$toast.clear()
                        if (this.page == 1) {
                            this._initScroll()
                        } else {
                            this.pullingDownUp()
                        }
                    })
                }, 1000)
            },
            _initScroll() {
                // 初始化滚动条
                this.BScroll = new BScroll(this.$refs.BScroll, {
                    pullDownRefresh: false,
                    pullUpLoad: {
                        threshold: 50 // 在上拉到超过底部 50px 时，触发 pullingUp 事件
                    },
                    click: true,
                    probeType: 3,
                    startY: 0,
                    bounce: {
                        top: false,
                        bottom: false,
                        left: false,
                        right: false
                    },
                    scrollbar: false
                });
                this.BScroll.on('pullingUp', () => {
                    if (this.page * this.pageSize < this.records) {
                        this.page++;
                        this.isUpLoading = true
                        this.loadingText = '加载中...'
                        this.getData()
                    }
                })
            },
            // 每次上拉加载或下拉刷新完都需要调用  重置
            pullingDownUp() {
                this.BScroll.finishPullUp()
                this.BScroll.refresh() // 重新计算元素高度
            }
        }
    }
</script>

<style src="./index.css" scoped/>
