const isFund = false
const isSoft = false
const isEdu = false
const isShowRD = false

const goalManagementName = 'goalManagementName'
const goalManagementKey = 'goalManagementKey'
const outerUrl = { targetTracking: '' }


const arr = [
    {
        name: '首页',
        key: '/api/1/menu/{token}/top',
        isSelected: false,
        icon: 'index',
        router: '/dms',
        active: false,
        isHome: true
    },
    {
        name: '客户管理',
        key: '客户管理',
        isSelected: false,
        icon: 'myClient',
        router: '',
        active: false,
        childMenu: [
            {
                name: '我的客户',
                show: true,
                router: isFund ? '/myClientsYm' : '/myClients',
                key: '/api/1/{token}/cus/info/list',
                active: false,
                scSource: 'click_mycus_tab'
            },
            {
                name: '我的通话待办',
                show: true,
                router: '/myCallTodosNew',
                key: '/api/1/cus/call/{token}/remind/new',
                active: false,
                scSource: 'click_wilcall_tab'
            },
            {
                name: '通话记录与评价',
                show: true,
                router: '/callRecords',
                key: '/api/1/call/main/list/{token}/get',
                active: false
            },
            {
                name: '通话记录',
                show: true,
                router: '/chunda/callRecords',
                key: '/api/1/chunda/call/count/{token}/get',
                active: false
            },
            {
                name: '客户转移记录',
                show: true,
                router: '/clientHistoryMovingRecords',
                key: ['/api/1/cus/dispatch/log/list/get/{token}', '/api/1/cus/dispatch/record/all'],
                active: false
            },
            {
                name: '诊股记录',
                show: true,
                router: '/medicalRecords',
                // todo： key在上线之前，替换下来
                key: '',
                active: false
            },
            {
                name: '共享客户记录',
                show: true,
                router: '/shareClients',
                key: '/api/1/{token}/cus/share/page',
                active: false,
                scSource: 'click_mycus_tab'
            },
            // {
            //   name: '企微外部客户',
            //   show: true,
            //   router: '/external-customer',
            //   key: '/api/1/wx/external/user/page',
            //   active: false
            // },
            {
                name: '客户开发记录',
                show: true,
                router: '/developmentRecord',
                key: '/api/1/cus/dev/record/{token}/page',
                active: false
            },
            {
                name: '预警客户监测',
                show: true,
                router: '/warningClients',
                key: '/api/1/warn/{token}/page', //
                active: false
            },
            {
                name: '自定义标签',
                show: true,
                router: '/customTag',
                key: '/api/1/permission/custom/tag',
                active: false
            },
            {
                name: '意向客户',
                show: true,
                router: '/intendedCustomer',
                key: '/api/1/{token}/intent/cus/list',
                active: false,
                scSource: 'enter_yxcus_list'
            }
        ]
    },
    {
        name: '订单管理',
        key: '订单管理',
        isSelected: false,
        icon: 'orderManage',
        router: '',
        active: false,
        childMenu: [
            {
                name: '客户支付进度',
                show: true,
                router: '/clientPaymentSchedule',
                key: '/api/1/edu/{token}/get/order/info',
                active: false,
                scSource: 'click_payrate_tab'
            },
            {
                name: '客户支付进度',
                show: true,
                router: '/clientPaymentNew',
                // todo： key在上线之前，替换下来
                key: '/api/2/soft/pay/progress/{token}/get/page',
                active: false,
                scSource: 'click_payrate_tab'
            },
            {
                name: '客户支付进度',
                show: true,
                router: '/paymenSchedule',
                key: '/api/1/yimi/{token}/cus/pay/progress/get',
                active: false,
                scSource: 'click_payrate_tab'
            },
            {
                name: '客户退款进度',
                show: true,
                router: '/clientRefund',
                key: '/api/1/order/{token}/refund/page',
                active: false
            },
            {
                name: '推广课订单',
                show: true,
                router: '/proMotionOrder',
                key: '/api/1/order/{token}/proMotion/order',
                active: false
            },
            {
                name: '我的订单',
                show: true,
                router: `/${isSoft ? 'myOrderSoft' : 'myOrder'}`,
                key: '/api/1/skynet/education/get/balance/order',
                active: false,
                scSource: 'click_myorder_tab'
            }
        ]
    },
    {
        name: '企业微信',
        key: '企业号客户', // 注意：key值不要换，动态加载企业号菜单用到了key
        isSelected: false,
        chatCorp: true, // 标识企业微信菜单
        icon: 'corpChat',
        router: '',
        active: false,
        childMenu: [
            {
                name: '跨应用群发消息',
                show: true,
                router: '/chat-tools/transCorp',
                key: '/corp/controller/1/adviser/group/list',
                active: false,
                sort: 0 // sort: 0企业号拖动列表的上方，1:企业号拖动列表，2:企业号拖动列表的下方
            },
            {
                name: '企业号管理',
                key: '企业号管理',
                sort: 2,
                childMenu: [
                    {
                        name: '自动更改姓名',
                        show: true,
                        router: '/autoName',
                        key: '/api/1/corp/cookie/rename',
                        active: false,
                        scSource: 'click_cwx_rename_tab'
                    },
                    {
                        name: '自动回复设置',
                        show: true,
                        router: '/chat-tools/autoReply',
                        key: '/api/1/corp/chat/reply/set',
                        active: false,
                        scSource: 'click_cwx_autoreply_tab'
                    },
                    {
                        name: '邀请内联设置',
                        show: true,
                        router: '/focusConf',
                        key: '/corp/controller/1/queryCorpByPage',
                        active: false
                    },
                    {
                        name: '客户操作记录',
                        show: true,
                        router: '/customerOperationRecord',
                        key: '/corp/controller/1/corp/cusOperation/page',
                        active: false
                    },
                    {
                        name: '关键词过滤管理',
                        show: true,
                        router: '/chat-tools/sensitive-word-management',
                        key: '/api/1/corp/chat/sensitive/word/management',
                        active: false
                    },
                    {
                        name: '企微客户信息补充',
                        show: true,
                        router: '/chat-tools/cusInfoAdd',
                        key: '/api/1/info/upload/record/query',
                        active: false
                    }
                ]
            },
            {
                name: '邀请播报',
                show: true,
                router: '/chat-tools/inviteList',
                key: '/corp/controller/1/flow-link/page/{token}',
                active: false,
                sort: 2 // sort: 0企业号拖动列表的上方，1:企业号拖动列表，2:企业号拖动列表的下方
            },
            {
                name: '内容消息列表',
                show: true,
                router: '/chat-tools/contentMessageList',
                key: '/corp/controller/1/keyMessage/{token}/list',
                active: false,
                sort: 2 // sort: 0企业号拖动列表的上方，1:企业号拖动列表，2:企业号拖动列表的下方
            },
            {
                name: '群发任务列表',
                show: true,
                router: '/chat-tools/groupTasking',
                key: '/api/1/corp/zdy/group/task/list',
                active: false,
                sort: 2 // sort: 0企业号拖动列表的上方，1:企业号拖动列表，2:企业号拖动列表的下方
            }
        ]
    },
    {
        name: 'IM管理',
        key: 'IM管理',
        isSelected: false,
        icon: 'corpChat',
        router: '',
        active: false,
        childMenu: [
            {
                name: 'IM自动回复',
                show: true,
                router: '/chat-tools/IMAutoReply',
                key: '/api/1/auto/reply/list',
                active: false,
                scSource: 'visit_im_autoReply',
                imSaTack: true // 单独用来判断im的埋点触发
            },
            {
                name: 'IM账号管理',
                show: true,
                router: '/chat-tools/IMAccountManagement',
                key: '/api/v1/adviserChatAccountInfo/page',
                active: false,
                scSource: 'visit_IMaccount_management',
                imSaTack: true // 单独用来判断im的埋点触发
            }
        ]
    },
    {
        name: '新资源监控',
        key: '新资源监控',
        isSelected: false,
        icon: 'complaint',
        router: '',
        active: false,
        childMenu: [
            {
                name: '物料链接分享记录',
                show: true,
                router: '/materialShareRecord',
                key: '/api/1/{token}/materL/leave/adviser/page',
                active: false,
                scSource: 'enter_wlfx_page'
            },
            // {
            //   name: '物料自动发送配置',
            //   show: true,
            //   router: '/materialAutoSend',
            //   key: '/api/1/material/auto/reply/list',
            //   active: false,
            //   scSource: 'enter_wlzd_page'
            // },
            {
                name: '物料自动发送记录',
                show: true,
                router: '/materialSendRecord',
                key: '/api/1/material/auto/reply/record/{token}/page',
                active: false
            },
            {
                name: '新资源监控',
                show: true,
                router: '/newResourceMonitoring',
                key: '/api/v1/digit-om/resourceNewMonitor/getCustomerPage/{token}',
                active: false,
                scSource: 'enter_newcustomer_monitoring'
            }
        ]
    },
    {
        name: '营销线索分析',
        key: '营销线索分析',
        isSelected: false,
        icon: 'complaint',
        router: '',
        active: false,
        childMenu: [
            {
                name: 'App绑定客户',
                show: true,
                router: '/appBinding',
                key: '/api/1/cus/bind/page',
                active: false
            },
            {
                name: '客户行为情绪',
                show: true,
                router: '/clientActionEmotion',
                key: '/api/1/{token}/cusemotion/list',
                active: false,
                scSource: 'enter_emotion_page'
            },
            {
                name: '活跃客户',
                show: true,
                router: '/workMarketDetailStaff',
                key: '/api/1/billboard/getMarketingListForAdviser/',
                active: false,
                scSource: 'enter_hykh_page'
            },
            {
                name: '客户实时行为',
                show: true,
                router: '/clientRealTimeAction',
                key: '/api/1/{token}/cus/event/page',
                active: false
            }
        ]
    },
    {
        name: '员工工具',
        key: '员工工具',
        isSelected: false,
        router: '',
        childMenu: [

            {
                name: '内容分享详情',
                show: true,
                router: isFund ? '/chat-tools/newContentShareDetailYm' : '/chat-tools/newContentShareDetail',
                key: '/api/1/{token}/liveroom/list',
                active: false
            },
            {
                name: '引流工具',
                show: true,
                router: '/appDownloadLink/drainageTools',
                key: '/api/1/admin/live/room/link',
                active: false,
                scSource: 'click_app_link_tab'
            },
            {
                name: '支付链接',
                show: true,
                router: '/chat-tools/payLink',
                key: '/api/1/paylink/{token}/list',
                active: false,
                scSource: 'click_paylink_tab'
            },
            {
                name: '课程观看链接',
                show: true,
                router: '/chat-tools/courseLink',
                key: '/api/1/{token}/courselink/link/list',
                active: false
            },
            {
                name: `支付链接${isEdu ? '(擒龙)' : ''}`,
                show: true,
                router: '/chat-tools/payLinkSoft',
                key: '/api/1/soft/paylink/{token}/list',
                active: false,
                scSource: 'click_paylink_tab'
            },
            {
                name: '优惠券',
                show: true,
                router: '/coupon',
                key: '/api/1/coupon/{token}/list',
                active: false,
                scSource: 'click_cuspower_tab'
            },
            {
                name: '客户权限',
                show: true,
                router: '/userPermissionNew/permit',
                key: '/api/1/user/set/permission/authorize',
                active: false,
                scSource: 'click_cuspower_tab'
            },
            {
                name: '开户活动',
                show: true,
                router: '/chat-tools/accountOpen',
                key: '/api/1/guosen/{token}/progress/page',
                active: false
            }, {
                name: '智能外呼',
                key: '智能外呼',
                isSelected: false,
                router: '',
                active: false,
                childMenu: [
                    {
                        name: '话术配置',
                        show: true,
                        router: '/chat-tools/verbalTrickConfig',
                        key: '/api/1/batch/robot/call/template/{token}/get',
                        active: false
                    }, {
                        name: '任务管理',
                        show: true,
                        router: '/chat-tools/taskManage',
                        key: '/api/1/batch/robot/call/job/info/{token}/get',
                        active: false
                    }
                ]
            },
            {
                name: '策略组合外呼记录',
                show: true,
                router: '/chat-tools/tradingPlanCallRecords',
                key: '/api/1/trading/plan/call/records',
                active: false
            },
            {
                name: '内容分享详情',
                show: true,
                router: '/chunda/share-content-details',
                key: '/api/1/chunda/{token}/liveroom/getLiveRoomSharePage',
                active: false
            },
            {
                name: '核算数据确认系统',
                show: true,
                router: '/hsSystem',
                key: '/api/1/{token}/hsSystem',
                active: false
            },
            {
                name: '退款率减免记录',
                show: true,
                router: '/payBack',
                key: '/api/1/order/refund/waiver/{token}/page',
                active: false
            },
            {
                name: '客户特权申请记录',
                show: true,
                router: '/chat-tools/applyRecords',
                key: '/api/1/cus/vip/{token}/activity/apply/page',
                active: false,
                sort: 2 // sort: 0企业号拖动列表的上方，1:企业号拖动列表，2:企业号拖动列表的下方
            },
            {
                name: '服务之星',
                show: true,
                router: '/chat-tools/serviceStar',
                key: '/api/1/{token}/serviceStar/page',
                active: false,
                sort: 2
            }
        ],
        icon: 'staffTool',
        level: 1
    },
    {
        name: '营销礼品管理',
        key: '营销活动管理',
        isSelected: false,
        router: '',
        icon: 'gift',
        childMenu: [
            {
                name: '付费客户礼品',
                show: true,
                router: '/fnPayCusGift',
                key: '/api/1/order/customer/{token}/list',
                active: false,
                scSource: 'click_paygifts_tab'
            },
            {
                name: '礼品发货管理',
                show: true,
                router: '/giftGrant',
                key: '/api/1/gift/delivery/{token}/list/admin',
                active: false,
                scSource: 'click_actlist_tab'
            },
            {
                name: '活动列表',
                show: true,
                router: '/maMarketActivity',
                key: '/api/1/act/gift/{token}/page',
                active: false,
                scSource: 'click_delivery_manag_tab'
            },
            {
                name: '积分、抽奖礼品',
                show: true,
                router: '/lottery',
                key: '/api/1/order/integral/{token}/list/admin',
                active: false,
                scSource: 'click_delivery_manag_tab111'
            }
        ]
    },
    {
        name: '社群运营工具',
        key: '社群运营工具',
        isSelected: false,
        icon: 'community',
        router: '',
        active: false,
        childMenu: [
            {
                name: '群发工具',
                show: true,
                router: '/groupSendTool',
                key: '/api/1/groupSend/page/{token}',
                active: false
            },
            {
                name: '一键拉群',
                show: true,
                router: '/community-tools/onClickPullGroup',
                key: '/api/1/pc/pull/group/page',
                active: false
            },
            {
                name: '在线聊天',
                show: true,
                router: '/community-tools/chatOnline',
                key: '/api/1/chat/message/finder/broker/list',
                active: false
            },
            {
                name: '客户朋友圈',
                show: true,
                router: '/community-tools/wechatMoments',
                key: '/api/1/friendCircle/friendCircleTaskList',
                active: false
            },
            {
                name: '外部标签管理',
                show: true,
                router: '/tagManagement',
                key: '/api/1/tag/getMyTagList/{token}',
                active: false
            },
            {
                name: '九天云控中心',
                show: true,
                router: '/community-tools/controlCenter',
                key: '/api/1/controllCenter/show',
                active: false
            },
            {
                name: '外部群聊数据统计',
                show: true,
                router: '/community-tools/external-group',
                key: '/api/1/community/tools/external/group/tools',
                active: false
            },
            {
                name: '客户群管理',
                show: true,
                router: '/community-tools/groupManagement',
                key: '/api/1/pc/groupInfo/page',
                active: false
            },
            {
                name: '单向客户管理',
                show: true,
                router: '/community-tools/deleteCustomer',
                key: '/api/1/clean/customer/detection',
                active: false
            },
            {
                name: '客户移群',
                show: true,
                router: '/community-tools/groupTransfer',
                key: '/api/1/manual/remove/getNeedRmCus',
                active: false
            },
            {
                name: '图文活跃用户探针',
                show: true,
                router: '/graphicActive',
                key: '/api/1/assistant/content/viewRecord/list/page',
                active: false
            },
            {
                name: '添加备注名任务列表',
                show: true,
                router: '/community-tools/addRemarkTastList',
                key: '/api/1/remark/batch/page/{token}',
                active: false
            },
            {
                name: '九天数据指标',
                key: '九天数据指标',
                childMenu: [
                    {
                        name: '核心功能数据统计',
                        show: true,
                        router: '/community-tools/coreAnalysis',
                        key: '/api/1/coreData/monitor/getMonitorData/{token}',
                        active: false
                    },
                    {
                        name: '群发消息任务列表',
                        show: true,
                        router: '/pcGroupSendAll',
                        key: '/api/1/pc/groupSend/allGroupSendList/{token}',
                        active: false
                    },
                    {
                        name: '九天PC留痕数据统计',
                        show: true,
                        router: '/community-tools/pcLogBoard',
                        key: '/api/1/message/logDashboard',
                        active: false
                    },
                    {
                        name: '九天功能使用统计',
                        show: true,
                        router: '/usageRecord',
                        key: '/api/1/pc/use/page/{token}',
                        active: false
                    },
                    //   {
                    //     name: '企微群发任务记录',
                    //     show: true,
                    //     router: '/community-tools/appSendList',
                    //     key: '/api/1/app/groupsend/newMode/finderPage/{token}',
                    //     active: false
                    //   },
                    {
                        name: '账号状态记录',
                        show: true,
                        router: '/community-tools/accountStatusRecords',
                        key: '/api/1/pc/groupSend/accountState/list/{token}',
                        active: false
                    },
                    {
                        name: '一键拉群使用统计',
                        show: true,
                        router: '/community-tools/dataStatistics',
                        key: '/api/1/pc/pull/group/getPullGroupStaticsRecordPage/{token}',
                        active: false
                    },
                    {
                        name: '设备监控列表',
                        show: true,
                        router: '/deviceMonitor',
                        key: '/api/1/pc/monitor/page/{token}',
                        active: false
                    },
                    {
                        name: '自动化运营记录',
                        show: true,
                        router: '/autoOperationRecord',
                        key: '/api/1/remove/group/active/{token}',
                        active: false
                    },
                    {
                        name: '标签使用统计',
                        show: true,
                        router: '/community-tools/tagsStatistics',
                        key: '/api/1/pc/tag/monitor/page/{token}',
                        active: false
                    }
                ]
            },
            {
                name: '单向客户管理记录',
                show: true,
                router: '/community-tools/clearCustomerRecords',
                key: '/api/1/clean/unidirectionalCus/getCleanRecordPage',
                active: false
            },
            // {
            //   name: '好友欢迎语配置',
            //   show: true,
            //   router: '/greeting',
            //   key: '/api/1/welcome/getWelcomeMsgList/{token}',
            //   active: false
            // },
            {
                name: '好友欢迎语配置',
                show: true,
                router: '/welcomeSet',
                key: '/api/1/welcome/getWelcomeMsgList/{token}',
                active: false,
                scSource: 'enter_hyhy_page'
            },
            {
                name: '沉默客户转移',
                show: true,
                router: '/community-tools/inactiveCustomer',
                key: '/api/1/silent/silentCustomerList',
                active: false
            },
            {
                name: '企微客服配置',
                show: true,
                router: '/chat-tools/serviceConfig',
                key: '/corp/controller/1/kf/list/{token}',
                active: false
            }
            // {
            //   name: '群直播工具',
            //   show: true,
            //   router: '/broadcastTools',
            //   key: '/api/1/live/getLiveBroadcastList/{token}',
            //   active: false
            // },
        ]
    },
    {
        name: '素材管理',
        icon: 'material',
        key: '素材管理',
        isSelected: false,
        router: '',
        childMenu: [
            {
                name: '我的素材',
                show: true,
                router: '/myMaterial',
                key: '/api/1/my/material/{token}/all/page',
                active: false,
                scSource: 'click_mymat_tab'
            },
            {
                name: '学习中心',
                show: true,
                router: '/callMaterial',
                key: ['/api/1/call/record/material/get/{token}', '/siteInspection/mode'],
                active: false,
                scSource: 'click_callmat_tab'
            },
            {
                name: '素材库',
                show: true,
                router: '/materialNew',
                key: '/api/1/material/materialSearch/{token}',
                active: false,
                scSource: ''
            },
            {
                name: '实时话术库',
                router: '/dialogue',
                key: '/api/1/marketing-assist-admin/search-tag-question', // 暂时没有
                active: false,
                show: true
            }
        ]
    },
    {
        name: '财富管理',
        key: '财富管理',
        isSelected: false,
        icon: 'wealth',
        router: '',
        active: false,
        childMenu: [
            {
                name: '优质客户分享',
                show: true,
                router: '/qualityCustomer',
                key: ['/api/1/quality/customer/menu', '/siteInspection/mode'],
                active: false
            }
        ]
    },
    {
        name: '员工效率管理',
        key: '管理工具',
        isSelected: false,
        router: '',
        icon: 'adviser',
        childMenu: [
            {
                name: '营销工作分析',
                show: true,
                router: '/workMarketListNew',
                key: '/api/1/marketing/{token}/billboard/getSummary',
                active: false,
                scSource: ''
            },
            {
                name: '通话统计智能分析',
                show: true,
                router: '/phoneAnalysis',
                key: '/api/1/call/data/{token}/get/cus/count',
                active: false,
                scSource: 'click_callanalyse_tab'
            },
            {
                name: '电话监听',
                show: true,
                router: '/monitorCalls',
                key: '/api/1/adviser/monitorCalls',
                active: false,
                scSource: ''
            }
        ]
    },
    {
        name: '数据控制台',
        key: 'dataConsole',
        isSelected: false,
        router: '',
        icon: 'data',
        active: false,
        childMenu: [
            // 微应用 maMarketActivity
            {
                name: '资源投产比分析',
                show: true,
                router: '/resourceInOutAnalysis',
                key: '/api/1/roi/performance/distribution/get',
                active: false,
                scSource: 'enter_resource_output_ratio'
            },
            {
                name: '订单智能分析',
                show: true,
                router: '/dms/orderAnalysis',
                key: '/api/1/order/{token}/analysis/new',
                active: false,
                scSource: 'click_eduorder_ia_tab'
            },
            {
                name: 'EDU业绩目标管理',
                show: true,
                router: '/eduServiceAnalysis',
                key: '/api/1/edu/{token}/import/achievement/target',
                active: false,
                scSource: 'click_edu_kpi_tab'
            },
            {
                name: '业绩目标管理',
                show: true,
                router: '/performanceGoalManagement',
                key: '/api/1/soft/{token}/import/achievement/target',
                active: false,
                scSource: 'click_edu_kpi_tab'
            },
            {
                name: goalManagementName,
                show: true,
                router: '',
                key: goalManagementKey,
                active: false,
                outerName: 'targetTracking',
                outerChain: outerUrl.targetTracking,
                scSource: 'click_monthly_eduaim_tab'
            },
            {
                name: '大数据舆情监控',
                show: true,
                router: '',
                key: '/api/admin/v1/home/opinion/validHomeAuth',
                active: false,
                outerName: 'sentiment',
                outerChain: outerUrl.sentiment,
                scSource: 'click_bigdata_pubpot_ctrl_tab'
            }
        ]
    },
    {
        name: '资源统计分析',
        key: '资源统计分析',
        isSelected: false,
        icon: 'resourceStatisticsAnalyze',
        router: '',
        active: false,
        childMenu: [
            {
                name: 'BID资源统计',
                show: true,
                router: '/bidResourceStatistics',
                key: '/api/1/monitor/verify/record/{token}/get/bid/list',
                active: false,
                scSource: 'click_bdresors_count_tab'
            },
            {
                name: '员工资源统计',
                show: true,
                router: '/staffResourceStatistics',
                key: '/api/1/monitor/verify/record/{token}/get/code/list',
                active: false,
                scSource: 'click_staffresors_count_tab'
            },
            {
                name: '资源计数明细',
                show: true,
                router: '/resourceDetail',
                key: '/api/1/monitor/verify/record/{token}/get/list',
                active: false,
                scSource: 'click_resorscount_detail_tab'
            },
            {
                name: '纯达资源计数明细',
                show: true,
                router: '/chunda/resourceDetail',
                key: '/api/1/cd/finder/getExternalUserList',
                active: false,
                scSource: 'click_resorscount_detail_tab'
            }
        ]
    },
    {
        name: '留痕管理',
        key: '留痕管理',
        isSelected: false,
        icon: 'clue',
        router: '',
        active: false,
        childMenu: [
            {
                name: '全局聊天记录',
                show: true,
                router: '/chatRecord',
                key: ['/api/1/{token}/chatRecord/customerSearching', '/api/1/{token}/chatRecord/staffSearching']
            },
            {
                name: '企业微信记录',
                show: true,
                router: '/enterpriseWechatRecords',
                key: '/api/1/corp/chat/record/new',
                active: false,
                scSource: 'click_cwx_record_tab'
            },
            {
                name: '企微客服记录',
                show: true,
                router: '/cusServiceRecords',
                key: '/api/1/qy/kf/message/log/{token}/list',
                active: false,
                scSource: 'click_cwx_record_tab'
            },
            {
                name: '九天PC会话留痕',
                show: true,
                router: '/RDChatRecords',
                key: '/api/1/message/conversationMessage',
                active: false,
                scSource: 'click_cwx_record_tab'
            },
            {
                name: '外部联系人聊天记录',
                show: true,
                router: '/enterpriseOutWechatRecords',
                key: '/api/1/wx/monitor/message/outcontact',
                active: false,
                scSource: 'click_outcus_record_tab'
            },
            {
                name: '客户聊天记录',
                show: true,
                router: '/cusChatRecords',
                key: '/api/1/wx/monitor/message/cusChatRecords',
                active: false
            },
            {
                name: '微信全局聊天记录',
                show: true,
                router: '/globalChatRecords',
                key: '/api/1/wx/monitor/advisor/getWxId/menu',
                active: false
            },
            {
                name: '视频号留痕',
                show: true,
                router: '/videoMark',
                key: '/api/1/mark/vidoMark/page',
                active: false
            },
            {
                name: '微信聊天记录',
                show: true,
                router: '/wxRecords',
                key: '/api/1/admin/wechat/chat/data',
                active: false,
                scSource: 'click_wx_record_tab'
            }
        ]
    },
    {
        name: '九天助手',
        key: '同行及风险客户',
        icon: 'rongdun',
        isSelected: false,
        router: '',
        childMenu: [
            // {name: '渠道数据列表', show: true, router: '/channelDataList', active: false},
            {
                name: '风险数据导出',
                show: true,
                router: '/riskDataExport',
                key: '/api/1/risk/{token}/get/log',
                active: false,
                scSource: 'click_riskdata_export_tab'
            },
            {
                name: '客户信息平台',
                show: true,
                router: '/cusPlatformSearch',
                key: '/api/1/cusInfo/cusSearch',
                active: false,
                scSource: 'click_rd_wxcus_tab'
            },
            {
                name: '九天激活客户',
                show: true,
                router: isShowRD ? '/activateCus' : '/activeCustomer',
                key: isShowRD ? '/api/1/web/active/orderPage' : '/api/1/aegis/active/customer/list',
                active: false,
                scSource: 'click_rd_actcus_tab'
            },
            {
                name: '拦截记录',
                show: true,
                router: '/intercept',
                key: '/api/1/intercept/record/{token}/get/intercept/records',
                active: false,
                scSource: 'click_inter_tab'
            },
            {
                name: '资源测试白名单',
                show: true,
                router: '/resourceTestWhiteList',
                key: '/api/1/whitelist/query',
                active: false,
                scSource: 'click_resourceTestWhiteList_tab'
            }
        ],
        level: 1
    },
    {
        name: 'AI监测官',
        key: 'AI监测官',
        isSelected: false,
        icon: 'ai',
        active: false,
        childMenu: [
            {
                name: 'AI监测官(单聊)',
                show: true,
                router: '/yuQingAnalyse',
                key: ['/api/1/sensitive/word/statistics', '/siteInspection/mode'],
                active: false,
                scSource: 'click_pubpoint_ctrl_tab'
            },
            {
                name: 'AI监测官(群发)',
                show: true,
                router: '/AiMonitorGroup/yqAnalyse',
                key: ['/api/1/sensitive/word/statistics', '/siteInspection/mode'],
                active: false,
                scSource: 'click_pubpoint_ctrl_tab'
            },
            {
                name: '账号注销',
                show: true,
                router: '/accountCancel',
                key: '/api/1/user/dispatch/phone/{token}/del',
                active: false,
                scSource: 'click_account_off_tab'
            },
            {
                name: '可疑文件接收记录',
                show: true,
                router: '/suspicious',
                key: '/api/1/exe/msg/page',
                active: false
            },

            {
                name: '木马查杀结果',
                show: true,
                router: '/virusRemove',
                key: '/api/1/virus/kill/page',
                active: false,
                scSource: 'click_yk_data_tab'
            },
            {
                name: '违规预警管理',
                show: true,
                router: '/earlyWarning',
                key: '/api/1/{token}/warning/record/list',
                active: false,
                scSource: 'click_account_off_tab'
            },
            {
                name: '疑似违规管理',
                show: true,
                router: '/violationsManagement',
                key: '/api/1/emotion/stock/sensitive/pageList',
                active: false
            }
        ]
    },
    {
        name: '营销工具管理',
        key: '营销工具管理',
        isSelected: false,
        router: '',
        // TODO：icon修改
        icon: 'market',
        childMenu: [
            {
                name: '营销工具监控',
                show: true,
                router: '/marketingToolMonitor',
                key: '/api/1/monitor/{token}/device',
                active: false,
                scSource: 'click_mkttool_ctrl_tab'
            },
            {
                name: '设备及微信管理明细',
                show: true,
                router: '/deviceWxAsset',
                key: '/api/1/asset',
                active: false,
                scSource: 'click_equipmt_wx_manag_tab'
            },
            {
                name: '手机号管理明细',
                show: true,
                router: '/phoneManage/list',
                key: '/api/1/phone/page/{token}',
                active: false,
                scSource: 'click_phno_manag_tab'
            },
            {
                name: '企业微信列表',
                show: true,
                router: '/corpList',
                key: '/api/1/corp/getCorpListMain',
                active: false
            },
            {
                name: '视频号管理',
                show: true,
                router: '/chat-tools/videoReport',
                key: '/api/1/channels/finder/pageBusiness/{token}',
                active: false
            }
        ]
    },
    {
        name: '数据维护',
        key: '数据维护',
        icon: 'system',
        isSelected: false,
        childMenu: [
            {
                name: '基础信息',
                show: true,
                router: '/staffInfo',
                key: '/api/1/skynet/gmg/base/info/list',
                active: false,
                scSource: 'click_baseinfo_tab'
            },
            {
                name: '流转配置管理',
                key: '流转配置管理',
                childMenu: [
                    {
                        name: '员工流转配置管理',
                        show: true,
                        router: '/circulationStaff',
                        key: '/api/1/{token}/adviser/dispatch/list/new',
                        active: false
                    },
                    {
                        name: '流转规则配置管理',
                        show: true,
                        router: '/cirRulesManagement',
                        key: '/api/1/{token}/dispatch/manage/list',
                        active: false
                    }
                ]
            },
            {
                name: '主售课程配置',
                show: true,
                router: '/courseManagement',
                key: '/api/1/teacher/group/getPageTeacher/{token}',
                active: false
            },
            {
                name: '微信号管理',
                show: true,
                router: '/staffWx',
                key: '/api/1/skynet/gmg/consultant/info/list',
                active: false,
                scSource: 'click_wxid_manag_tab'
            },
            {
                name: '绑定微信',
                show: true,
                router: '/bindWechat',
                key: '/api/1/skynet/{channel}/get',
                active: false,
                scSource: 'click_wxbind_tab'
            },
            {
                name: '离职员工',
                show: true,
                router: '/dimission',
                key: '/api/1/adviser/quit/{token}/list',
                active: false,
                scSource: 'click_wxbind_tab'
            },
            {
                name: '企业微信号管理',
                show: true,
                router: '/chunda/enterpriseWX',
                key: '/api/1/finder/getLoginBrokerList',
                active: false,
                scSource: 'click_wxid_manag_tab'
            },
            {
                name: '企业微信号管理',
                show: true,
                router: '/yimi/enterpriseWX',
                key: '/api/1/yimi/getLoginBrokerList',
                active: false,
                scSource: 'click_wxid_manag_tab'
            },
            {
                name: '分享客户配置管理',
                show: true,
                router: '/shareRuleManagement',
                key: '/api/1/cd/{token}/dispatch/manage/list',
                active: false
            }
        ],
        router: '',
        active: false
    },
    {
        name: '消息中心',
        key: '消息中心',
        icon: 'msgCenter',
        isSelected: false,
        router: '',
        childMenu: [{
            name: '公告板',
            show: true,
            router: '/advertiserBoard',
            key: '/api/1/notice/msg/{token}/get/list',
            active: false,
            scSource: 'click_noteboard_tab'
        }, {
            name: '消息列表',
            show: true,
            router: '/messageList',
            key: '/api/1/user/finder/notice/msg/list',
            active: false,
            scSource: 'click_newslist_tab'
        }, {
            name: '投诉与建议',
            show: true,
            router: '/feedback',
            key: '/api/1/user/finder/notice/report',
            active: false,
            scSource: 'click_suggestions_tab'
        }],
        level: 1
    },
    {
        name: '员工管理',
        key: '投顾管理',
        isSelected: false,
        router: '',
        icon: 'staffManage',
        level: 1,
        childMenu: [
            {
                name: '员工关系管理',
                show: true,
                router: '/adviserRelation',
                key: '/api/1/depart/tree',
                active: false,
                scSource: 'click_epship_manag_tab'
            },
            {
                name: '角色管理',
                show: true,
                router: '/roleManage',
                key: '/api/1/role/list',
                active: false,
                scSource: 'click_role_manag_tab'
            },
            {
                name: '直播室管理',
                show: true,
                router: '/liveManage',
                key: '/api/1/adviser/live/room/all/add/{token}',
                active: false,
                scSource: 'click_liveroom_manag_tab'
            },
            {
                name: '权限管理',
                show: true,
                router: '/permissionManage',
                key: '/api/1/permission/tree',
                active: false,
                scSource: 'click_power_manag_tab'
            },
            {
                name: '账号安全管理',
                show: true,
                router: '/accountSafty',
                key: '/api/1/adviser/pass/{token}/list',
                active: false,
                scSource: 'click_accotsafe_manag_tab'
            },
            {
                name: '外呼线路号管理',
                show: true,
                router: '/outboundManage',
                key: '/api/1/phone/dep/{token}/list',
                active: false,
                scSource: 'click_accotsafe_manag_tab'
            }, {
                name: '企微机器人播报',
                show: true,
                router: '/robotManage',
                key: '/api/1/robot/{token}/notice/page',
                active: false
            }]
    },
    {
        name: '操作日志',
        key: '操作日志',
        icon: 'asset',
        isSelected: false,
        router: '',
        childMenu: [
            {
                name: '操作日志',
                show: true,
                router: '/operateLog',
                key: '/api/1/log/{token}/list',
                active: false,
                scSource: 'click_oplog_tab'
            }
        ],
        level: 1
    }
]
const arr1 = arr.map(i => {
    return i.childMenu && i.childMenu.map(j => {
        return {
            name: j.name|| '',
            router: j.router || ''
        }
    })
})
console.log(JSON.stringify(arr1[0]))