/**
 * @Author              : wanghw
 * @Date                : 2020/6/12 - 9:39
 * @PROJECT_NAME        : A-WORKSPACE
 * @FileName            : index
 * @Last Modified       : 2020/6/12 - 9:39 - wanghw
 */
const Routes = [
    {
        path: '/',
        name: 'BScroll',
        component: () => import('../../views/BScroll/index'),
        meta: {
            title: 'better-scroll-标准列表'
        }
    }
]

export default Routes
