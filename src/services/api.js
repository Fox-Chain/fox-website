/*
 * @Author: Doctor
 * @Date: 2021-11-28 14:55:39
 * @LastEditTime: 2021-11-28 15:47:27
 * @LastEditors: Doctor
 * @Description: 
 * @FilePath: \qy\src\services\api.js
 * jianqiang
 */
import { stringify } from 'qs';
import request from '@/utils/request';

// export async function getFakeCaptcha(mobile) {
//   return request(`/api/captcha?mobile=${mobile}`);
// }

// 以下为新增，上面的后期删除

// 获取project信息
export async function getProject(params) {
  return request(`/api/getProject?${stringify(params)}`);
}

// 获取project信息
export async function getCategory() {
  return request(`/api/getCategory`);
}

// 获取project信息
export async function getSubCategory(params) {
  return request(`/api/getSubCategory?${stringify(params)}`);
}

