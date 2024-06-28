const json = {
    "id": 19468,
    "parentId": 0,
    "name": "root",
    "code": "root",
    "type": 0,
    "children": [
        {
            "id": 20816,
            "parentId": 19468,
            "name": "前端权限",
            "code": "front",
            "type": 0,
            "children": [
                {
                    "id": 20801,
                    "parentId": 20816,
                    "name": "观点",
                    "code": "viewPoint",
                    "type": 0,
                    "children": [
                        {
                            "id": 20804,
                            "parentId": 20801,
                            "name": "观点列表页",
                            "code": "/page/show/viewPointList",
                            "type": 0,
                            "url": "",
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20802,
                    "parentId": 20816,
                    "name": "我的",
                    "code": "min",
                    "type": 0,
                    "children": [
                        {
                            "id": 20805,
                            "parentId": 20802,
                            "name": "我的观点",
                            "code": "/page/show/myviewPoint",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20806,
                            "parentId": 20802,
                            "name": "我的上传",
                            "code": "/page/show/myUpload",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20807,
                            "parentId": 20802,
                            "name": "主题合集",
                            "code": "/page/show/themeConcat",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20808,
                            "parentId": 20802,
                            "name": "我的收藏",
                            "code": "/page/show/myCollect",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20898,
                            "parentId": 20802,
                            "name": "我的",
                            "code": "/page/show/mine",
                            "type": 0,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20803,
                    "parentId": 20816,
                    "name": "系统",
                    "code": "system",
                    "type": 0,
                    "children": [
                        {
                            "id": 20809,
                            "parentId": 20803,
                            "name": "权限管理",
                            "code": "/page/show/permissionList",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20810,
                            "parentId": 20803,
                            "name": "角色管理",
                            "code": "/page/show/roleManager",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20811,
                            "parentId": 20803,
                            "name": "账号管理",
                            "code": "/page/show/accountManager",
                            "type": 0,
                            "url": "",
                            "children": []
                        },
                        {
                            "id": 20897,
                            "parentId": 20803,
                            "name": "系统",
                            "code": "/page/show/system",
                            "type": 0,
                            "children": []
                        }
                    ]
                }
            ]
        },
        {
            "id": 20817,
            "parentId": 19468,
            "name": "后端权限",
            "code": "backend",
            "type": 0,
            "children": [
                {
                    "id": 20812,
                    "parentId": 20817,
                    "name": "基础权限",
                    "code": "base",
                    "type": 0,
                    "children": [
                        {
                            "id": 20813,
                            "parentId": 20812,
                            "name": "获取当前用户权限",
                            "type": 1,
                            "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/all/get",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20814,
                            "parentId": 20812,
                            "name": "登出",
                            "type": 1,
                            "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/log/out",
                            "interfaceType": 1,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20818,
                    "parentId": 20817,
                    "name": "观点信息",
                    "code": "观点信息",
                    "type": 0,
                    "children": [
                        {
                            "id": 20821,
                            "parentId": 20818,
                            "name": "新增观点",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/insert",
                            "interfaceType": 0,
                            "children": []
                        },
                        {
                            "id": 20822,
                            "parentId": 20818,
                            "name": "分页查询收藏的观点列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/pageQueryCollectedViewPointList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20823,
                            "parentId": 20818,
                            "name": "根据主观点id分页查询追踪观点列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/pageQueryTrackViewPointList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20824,
                            "parentId": 20818,
                            "name": "分页查询观点列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/pageQueryViewPointList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20825,
                            "parentId": 20818,
                            "name": "暂存跟踪观点",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/tempSaveTrackViewPoint",
                            "interfaceType": 0,
                            "children": []
                        },
                        {
                            "id": 20826,
                            "parentId": 20818,
                            "name": "暂存观点",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/tempSaveViewPoint",
                            "interfaceType": 0,
                            "children": []
                        },
                        {
                            "id": 20827,
                            "parentId": 20818,
                            "name": "查询暂存的追踪观点明细",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/queryTempSaveTrackViewPoint",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20828,
                            "parentId": 20818,
                            "name": "查询暂存的观点明细",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/queryTempSaveViewPoint",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20829,
                            "parentId": 20818,
                            "name": "观点置顶",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/setTopViewPoint",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20830,
                            "parentId": 20818,
                            "name": "查询全部观点个数",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/queryAllViewPointCount",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20831,
                            "parentId": 20818,
                            "name": "查询置顶观点个数",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/queryTopViewPointCount",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20832,
                            "parentId": 20818,
                            "name": "分页查询简单的观点列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/viewpoint/pageQuerySimpleViewPointList",
                            "interfaceType": 3,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20819,
                    "parentId": 20817,
                    "name": "通用标签",
                    "code": "通用标签",
                    "type": 0,
                    "children": [
                        {
                            "id": 20833,
                            "parentId": 20819,
                            "name": "分页查询创建的标签列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/sysTag/pageQueryTagList",
                            "interfaceType": 3,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20820,
                    "parentId": 20817,
                    "name": "通用附件",
                    "code": "通用附件",
                    "type": 0,
                    "children": [
                        {
                            "id": 20834,
                            "parentId": 20820,
                            "name": "新增附件",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/sysFile/insert",
                            "interfaceType": 0,
                            "children": []
                        },
                        {
                            "id": 20835,
                            "parentId": 20820,
                            "name": "根据id逻辑删除附件信息",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/sysFile/logicDeleteById",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20836,
                            "parentId": 20820,
                            "name": "分页查询附件列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/sysFile/pageQueryFileList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20837,
                            "parentId": 20820,
                            "name": "分页查询不同类型关系的附件列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/sysFile/pageQueryFileListByRelationType",
                            "interfaceType": 3,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20845,
                    "parentId": 20817,
                    "name": "主题信息",
                    "code": "主题信息",
                    "type": 0,
                    "children": [
                        {
                            "id": 20846,
                            "parentId": 20845,
                            "name": "创建主题",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/insert",
                            "interfaceType": 0,
                            "children": []
                        },
                        {
                            "id": 20847,
                            "parentId": 20845,
                            "name": "删除主题",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/logicDeleteById",
                            "interfaceType": 1,
                            "children": []
                        },
                        {
                            "id": 20848,
                            "parentId": 20845,
                            "name": "分页查询创建的主题合集列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/pageQuerySimpleThemeList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20849,
                            "parentId": 20845,
                            "name": "根据用户ID分页查询主题合集列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/pageQueryThemeListByUserId",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20850,
                            "parentId": 20845,
                            "name": "根据ID查询主题详情",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/queryById",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20851,
                            "parentId": 20845,
                            "name": "根据主题id查询主题下观点列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/queryEntityInfoListById",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20852,
                            "parentId": 20845,
                            "name": "根据ID和编码查询主体关联子体",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/queryEntityListById",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20853,
                            "parentId": 20845,
                            "name": "修改主题",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/theme/update",
                            "interfaceType": 2,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20854,
                    "parentId": 20817,
                    "name": "主题关系",
                    "code": "主题关系",
                    "type": 0,
                    "children": [
                        {
                            "id": 20855,
                            "parentId": 20854,
                            "name": "实体批量绑定主题",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/themeRelationship/entityBatchBindTheme",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20856,
                            "parentId": 20854,
                            "name": "根据实体id移除主题关系",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/themeRelationship/removeThemeRelationshipByEntityId",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20857,
                            "parentId": 20854,
                            "name": "主题批量绑定实体",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/themeRelationship/themeBatchBindEntity",
                            "interfaceType": 2,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20858,
                    "parentId": 20817,
                    "name": "用户收藏",
                    "code": "用户收藏",
                    "type": 0,
                    "children": [
                        {
                            "id": 20859,
                            "parentId": 20858,
                            "name": "添加收藏",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userCollectionRelationship/insert",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20860,
                            "parentId": 20858,
                            "name": "取消收藏",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userCollectionRelationship/removeCollectionRelationship",
                            "interfaceType": 2,
                            "children": []
                        },
                        {
                            "id": 20861,
                            "parentId": 20858,
                            "name": "查询收藏总数",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userCollectionRelationship/queryCollectionRelationshipCount",
                            "interfaceType": 3,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20862,
                    "parentId": 20817,
                    "name": "用户详情",
                    "code": "用户详情",
                    "type": 0,
                    "children": [
                        {
                            "id": 20863,
                            "parentId": 20862,
                            "name": "分页查询研究员列表",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userDetialInfo/pageQueryResearcherList",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20864,
                            "parentId": 20862,
                            "name": "查询研究员明细信息",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userDetialInfo/queryResearcherDetialInfo",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20865,
                            "parentId": 20862,
                            "name": "根据用户类型查询用户明细信息",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userDetialInfo/queryUserDetialInfo",
                            "interfaceType": 3,
                            "children": []
                        },
                        {
                            "id": 20866,
                            "parentId": 20862,
                            "name": "根据数据id修改用户信息",
                            "type": 1,
                            "url": "/rjhy-invest-research-platform/api/1/userDetialInfo/update",
                            "interfaceType": 2,
                            "children": []
                        }
                    ]
                },
                {
                    "id": 20869,
                    "parentId": 20817,
                    "name": "系统管理",
                    "code": "system-manage",
                    "type": 0,
                    "children": [
                        {
                            "id": 20870,
                            "parentId": 20869,
                            "name": "账号管理",
                            "code": "account-manage",
                            "type": 0,
                            "children": [
                                {
                                    "id": 20884,
                                    "parentId": 20870,
                                    "name": "部门列表",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/department/1/wise/tree",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20885,
                                    "parentId": 20870,
                                    "name": "用户列表",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/page/list/get",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20886,
                                    "parentId": 20870,
                                    "name": "工号查询用户",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/p/info/sync",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20887,
                                    "parentId": 20870,
                                    "name": "新增用户",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/system/add",
                                    "interfaceType": 0,
                                    "children": []
                                },
                                {
                                    "id": 20888,
                                    "parentId": 20870,
                                    "name": "全部/用户角色列表",
                                    "type": 1,
                                    "url": "/rjhy-manage-busines/api/admin/business/manage/role/1/wise/page/lis/get",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20889,
                                    "parentId": 20870,
                                    "name": "用户绑定角色",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/role/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20890,
                                    "parentId": 20870,
                                    "name": "启用/禁用账号系统状态",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/system/status/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20891,
                                    "parentId": 20870,
                                    "name": "账号解冻",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/status/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20892,
                                    "parentId": 20870,
                                    "name": "移除",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/system/delete",
                                    "interfaceType": 1,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 20871,
                            "parentId": 20869,
                            "name": "角色管理",
                            "code": "role-manage",
                            "type": 0,
                            "children": [
                                {
                                    "id": 20877,
                                    "parentId": 20871,
                                    "name": "角色列表",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/role/1/wise/page/lis/get",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20878,
                                    "parentId": 20871,
                                    "name": "新增角色",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/role/1/wise/add",
                                    "interfaceType": 0,
                                    "children": []
                                },
                                {
                                    "id": 20879,
                                    "parentId": 20871,
                                    "name": "编辑角色",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/role/1/wise/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20880,
                                    "parentId": 20871,
                                    "name": "删除角色",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/role/1/wise/delete",
                                    "interfaceType": 1,
                                    "children": []
                                },
                                {
                                    "id": 20881,
                                    "parentId": 20871,
                                    "name": "获取角色绑定权限",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/role/permission/all/get",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20882,
                                    "parentId": 20871,
                                    "name": "角色绑定权限",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/role/1/wise/permission/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20883,
                                    "parentId": 20871,
                                    "name": "角色绑定账号列表",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/user/1/wise/page/list/get",
                                    "interfaceType": 3,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 20872,
                            "parentId": 20869,
                            "name": "权限管理",
                            "code": "permission-manage",
                            "type": 0,
                            "children": [
                                {
                                    "id": 20873,
                                    "parentId": 20872,
                                    "name": "权限树",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/tree",
                                    "interfaceType": 3,
                                    "children": []
                                },
                                {
                                    "id": 20874,
                                    "parentId": 20872,
                                    "name": "新增权限",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/add",
                                    "interfaceType": 0,
                                    "children": []
                                },
                                {
                                    "id": 20875,
                                    "parentId": 20872,
                                    "name": "编辑权限",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/update",
                                    "interfaceType": 2,
                                    "children": []
                                },
                                {
                                    "id": 20876,
                                    "parentId": 20872,
                                    "name": "删除权限",
                                    "type": 1,
                                    "url": "/rjhy-manage-business/api/admin/business/manage/permission/1/wise/delete",
                                    "interfaceType": 1,
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
// 递归获取每一个对象
function flattenTree(tree, result = []) {
    tree && tree.forEach(node => {
        if (node.type !== 0) {
            result.push(node);
        }
        if (node.children) {
            flattenTree(node.children, result);
        }
    });
    return result;
}
console.log(JSON.stringify(flattenTree(json.children)))