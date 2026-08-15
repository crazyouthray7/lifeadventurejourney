'use strict';

/**
 * 人生冒險誌｜人生模擬器 — 世界化姓名池
 * Produce By: CrazyRL7
 *
 * 供後代系統（子女命名、三代家族樹親屬命名）使用。
 * 名字刻意取「中文語境、不特定地區」的中性常用名。
 * genName(R, gender) 的 R 為引擎的隨機函式（回傳 [0,1)），
 * 讓姓名可被 seed 種子重現。
 */

export const SURNAMES = [
  '林', '陳', '張', '李', '王', '吳', '劉', '黃', '楊', '周',
  '趙', '孫', '鄭', '何', '郭', '高', '羅', '梁', '宋', '謝',
  '唐', '許', '韓', '馮', '鄧', '曹', '彭', '曾', '蕭', '田',
  '董', '袁', '潘', '于', '蔣', '蔡', '余', '杜', '葉', '程'
];

export const MALE_GIVEN = [
  '志豪', '建國', '文彬', '俊傑', '家豪', '明哲', '承翰', '冠宇', '柏豪', '宇軒',
  '翊銘', '泓毅', '柏翰', '庭宇', '宥廷', '秉宏', '書豪', '信宏', '志遠', '天佑',
  '世傑', '文豪', '俊廷', '子軒', '弘毅', '正男', '耀宗', '國華', '啟銘', '嘉佑'
];

export const FEMALE_GIVEN = [
  '雅婷', '欣怡', '美玲', '淑芬', '佳穎', '怡君', '佩珊', '思涵', '欣妤', '芷晴',
  '芸安', '婉婷', '靜怡', '惠如', '秀珍', '麗華', '雅雯', '欣儀', '郁婷', '庭萱',
  '詠晴', '品瑄', '采潔', '依靜', '湘婷', '美惠', '素貞', '佩芸', '慧君', '孟潔'
];

export function genGender(R) {
  return R() < 0.5 ? 'm' : 'f';
}

/**
 * 產生一個完整姓名。
 * @param {function} R 引擎隨機函式（回傳 [0,1)）
 * @param {string} [gender] 'm' | 'f'，缺省隨機
 * @returns {string} 如「林志豪」「陳雅婷」
 */
export function genName(R, gender) {
  const g = gender || genGender(R);
  const pool = g === 'f' ? FEMALE_GIVEN : MALE_GIVEN;
  const s = SURNAMES[Math.floor(R() * SURNAMES.length)];
  const given = pool[Math.floor(R() * pool.length)];
  return s + given;
}
