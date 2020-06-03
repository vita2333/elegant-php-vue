/**
 *
 */
import { Moment } from 'moment'

export interface AdminLog {
  id?: number | string //
  user_id?: number | string //
  username?: string //
  type?: number | string //
  table_name?: string //
  description?: string //
  route?: string //
  ip?: string //
  created_at?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface AdminOperationLog {
  id?: number | string //
  user_id?: number | string //
  path?: string //
  method?: string //
  ip?: string //
  input?: string //
  created_at?: string //
  updated_at?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface Article {
  id?: number | string //
  key?: string // 唯一键
  title?: string // 标题
  group?: string // 分组
  banner?: string // 首图
  banner_url?: string // 首图链接
  content?: string // 内容
  sort_order?: number | string // 排序
  is_used?: number | string // 是否使用
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 *
 */
export interface Backup {
  id?: number | string //
  timestamp?: number | string //
  path?: string //
  files?: string //
  dump?: string //
  size?: number | string //
  comment?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface CronSchedule {
  id?: number | string //
  jobCode?: string //
  status?: number | string //
  messages?: string //
  dateCreated?: string //
  dateFinished?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface GoodsCollection {
  id?: number | string //
  user_id?: number | string // 用户id
  goods_id?: number | string // 商品id
  created_at?: string //
  updated_at?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface GoodsShopAgent {
  id?: number | string //
  shop_id?: number | string //
  agent_level?: string // 代理级别
  agent_addr_code?: string // 代理地址编码
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 *
 */
export interface GoodsShopIndex {
  id?: number | string //
  shop_id?: number | string //
  show_goods_id?: number | string // 列表页显示的商品id
  // relations

  // other fields
}

/**
 * 店铺位置表
 */
export interface GoodsShopLocation {
  id?: number | string //
  owner_id?: number | string // 店主id
  shop_id?: number | string // 店铺id
  stay_start_at?: string // 停留时间自
  stay_end_at?: string // 停留时间止
  shop_province?: string // 省
  shop_city?: string // 市
  shop_district?: string // 县
  shop_address?: string // 详细地址
  shop_lng?: number | string // 经度
  shop_lat?: number | string // 纬度
  // relations

  // other fields
}

/**
 *
 */
export interface GoodsShopPrinter {
  id?: number | string //
  shop_id?: number | string //
  name?: string // 名称
  machine_id?: string // 打印机编号
  machine_secret?: string // 打印机秘钥
  is_auto?: number | string // 是否自动打印
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 店铺举报表
 */
export interface GoodsShopReport {
  id?: number | string //
  user_id?: number | string //
  shop_id?: number | string //
  report_type?: string // 举报类型
  report_pic?: string //
  report_remark?: string // 举报信息
  created_at?: string //
  updated_at?: string //
  // relations

  // other fields
}

/**
 *
 */
export interface GoodsShopStaff {
  id?: number | string //
  shop_id?: number | string //
  mobile?: string // 手机号
  name?: string // 姓名
  position?: string // 职位
  status?: string // 状态
  is_manager?: number | string // 是否是管理员
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 后台用户表
 */
export interface Admin {
  id?: number | string //
  username?: string // 用户名
  email?: string // 邮箱
  avatar_img?: string // 头像
  last_login_at?: string // 上次登录时间
  last_login_ip?: string // 上次登录ip
  password_hash?: string //
  user_status?: number | string // 用户状态
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 商品sku表
 */
export interface GoodsSku {
  id?: number | string //
  sku_sn?: string // sku编码
  spu_id?: number | string // 商品spu
  scan_code?: string // 条形码
  buy_price?: number | string // 进货价
  ori_price?: number | string // 原价
  vip_price?: number | string // 会员价
  charge_vip_price?: number | string // 充值会员价
  activity_price?: number | string // 活动价
  stock?: number | string // 库存
  limit_quantity?: string | number

  // relations
  goodsSkuSpecValues?: GoodsSkuSpecValue[]
  // other
  sell_rate?: number | string
  vip_rate?: number | string
}

/**
 * 商品sku规格值表
 */
export interface GoodsSkuSpecValue {
  id?: number | string //
  sku_id?: number | string // 商品
  spec_id?: number | string // 规格
  spec_value_id?: number | string // 规格值
  spec_img?: string // 规格图片
  // relations
  spec?: Spec
  specValue?: SpecValue
  // other fields
}

/**
 * 商品sku表
 */
export interface GoodsSpu {
  id?: number | string //
  spu_sn?: string // 商品编号
  title?: string // 商品标题
  scan_code?: string // 条形码
  goods_type_id?: number | string // 商品类型
  shop_id?: number | string // 店铺
  goods_pic?: string // 商品图片
  goods_video?: string // 商品视频
  buy_price?: number | string // 进货价
  price?: number | string // 销售价
  vip_price?: number | string // 会员价
  charge_vip_price?: number | string // 充值会员价
  lowest_price?: string | number // 最低价
  activity_id?: number | string // 活动
  discount_price?: number | string // 优惠价格(分)
  stock?: number | string // 库存
  is_merchant_goods?: number | string // 是否自营商品
  is_on_sale?: number | string // 是否上架
  is_has_skus?: number | string // 有无规格
  link_shop_id?: number | string
  link_goods_id?: number | string
  limit_quantity?: string | number
  description?: string // 详细描述
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  tag?: ShopGoodsTag[]
  tagAssc?: ShopGoodsTagAssc[]
  shop?: Shop
  goodsSkus?: GoodsSku[]
  // other fields
  tags?: string[]
  sell_rate?: any
  vip_rate?: any
}

/**
 * 商品表
 */
export interface GoodsType {
  id?: number | string // ID
  goods_sn?: string // 商品类型编号
  goods_name?: string // 商品类型名称
  goods_type_img?: string // 商品类型图片
  lft?: number | string //
  rgt?: number | string //
  depth?: number | string //
  // relations

  // other fields
  parent_id?: any
  children?: GoodsType
}

/**
 * 店铺
 */
export interface Shop {
  id?: number | string //
  user_id?: number | string // 用户id
  shop_avatar?: string // 店铺头像
  shop_name?: string // 门店名称
  shop_type?: string // 店铺类型
  main_goods_type_id?: number | string // 主营商品类型
  is_website_self?: number | string // 是否平台自营
  support_pay_method?: string | string[] // 支持的支付方式
  shop_address?: string // 详细地址
  shop_lng?: number | string // 经度
  shop_lat?: number | string // 纬度
  shop_contact?: string // 联系人名字
  shop_tel?: string // 联系人电话
  open_at?: string // 营业时间自
  close_at?: string // 营业时间止
  deliver_way?: string | string[] // 配送方式
  deliver_range?: string // 配送范围(公里)
  slogan?: string // 营销口号
  shop_status?: string // 店铺状态
  pay_qr?: string // 收款二维码
  monthly_vip_price?: number | string // 月卡费用
  base_yearly_vip_price?: number | string // 普通年卡费用
  refund_yearly_vip_price?: number | string // 返点年卡费用
  deliver_base_price?: number | string // 配送费
  deliver_free_price?: number | string // 满免
  deliver_limit_price?: number | string // 起送费
  fetch_limit_price?: number | string // 自提最低费
  created_at?: string //
  updated_at?: string //
  quick_deliver_limit_price?: number | string // 极速起送价
  quick_deliver_price?: number | string // 极速配送费
  quick_deliver_range?: number | string // 极速配送范围(公里)
  quick_deliver_start_at?: string // 极速配送起始时间
  quick_deliver_end_at?: string // 极速配送结束时间
  // relations
  user?: User
  showGoods?: GoodsSpu[]
  isUserCollectedShop?: any
  staff?: GoodsShopStaff
  // other fields
  distance?: string
}

/**
 * 店铺收藏表
 */
export interface ShopCollection {
  id?: number | string //
  user_id?: number | string // 用户id
  shop_id?: number | string // 店铺id
  created_at?: string //
  updated_at?: string //
  seller_id?: number | string // 卖家id
  // relations
  customer?: User
  // other fields
}

/**
 * 店铺商品标签
 */
export interface ShopGoodsTag {
  id?: number | string //
  shop_id?: number | string // 店铺
  goods_type_id?: number | string // 商品类型
  tag_name?: string // 标签名称
  sort_order?: number | string // 排序
  // relations

  // other fields
}

/**
 * 店铺商品标签关联表
 */
export interface ShopGoodsTagAssc {
  id?: number | string //
  tag_id?: number | string // 标签
  goods_id?: number | string // 商品
  sort_order?: number | string // 排序
  // relations

  // other fields`
}

/**
 * 购物车
 */
export interface ShoppingCart {
  id?: number | string // id
  shop_id?: number | string // 店铺
  user_id?: number | string // 买家
  goods_id?: number | string // 商品
  discount_price?: number | string // 优惠价
  price?: number | string // 价格
  quantity?: number | string // 数量
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

export interface ShopVipCard {
  id?: number | string //
  user_id?: number | string // 用户
  card_type?: number | string // 类型
  start_at?: string // 有效期自
  end_at?: string // 有效期止
  is_used?: number | string // 是否使用
  refund_price?: number | string // 返点金额
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  vip?: User
  // other fields
}

/**
 * 会员充值记录表
 */
export interface ShopVipCharge {
  id?: number | string //
  user_id?: number | string // 用户
  shop_id?: number | string // 店铺
  amount?: number | string // 金额
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  user?: User
  shop?: Shop
  // other fields
}

/**
 * 店铺商品销售比率表
 */
export interface ShopSellRate {
  id?: number | string //
  shop_id?: number | string // 店铺
  goods_type_id?: number | string // 商品类型
  charge_vip_rate?: number | string // 充值会员销售降价百分比
  // relations
  shop?: Shop
  // other fields
}

/**
 * 商品起订价表
 */
export interface GoodsTypeLimitPrice {
  id?: number | string //
  shop_id?: number | string // 店铺
  goods_type_id?: number | string // 商品
  limit_price?: number | string // 起订价
  is_open?: number | string // 是否开启
  // relations
  shop?: Shop
  goodsType?: GoodsType
  // other fields
}

/**
 * 店铺会员表
 */
export interface ShopVip {
  id?: number | string //
  shop_id?: number | string // 店铺
  user_id?: number | string // 用户
  vip_remark?: string // 用户备注
  face_info?: string // 人脸档案
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  shop?: Shop
  user?: User
  shopVipCards?: ShopVipCard[]
  // other fields
}

/**
 * 网站设置
 */
export interface SiteConfig {
  id?: number | string // ID
  key?: string // 配置键
  title?: string // 配置标题
  desc?: string // 配置说明
  group?: string // 分组
  type?: number | string // 配置类型
  value?: string // 配置值
  sort?: number | string // 排序
  is_use?: number | string // 使用中
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 规格表
 */
export interface Spec {
  id?: number | string //
  spec_name?: string // 规格名称
  // relations
  specValues?: SpecValue[]
  // other fields
}

/**
 * 规格值表
 */
export interface SpecValue {
  id?: number | string //
  spec_id?: number | string // 规格
  spec_value?: string // 规格值
  // relations

  // other fields
}

/**
 *
 */
export interface User {
  id?: number | string //
  nickname?: string // 平台显示名称
  wechat_open_id?: string // 微信open_id
  username?: string // 登录名
  mobile?: string // 手机号
  password_hash?: string //
  email?: string // 邮箱
  user_status?: number | string // 用户状态
  created_at?: string //
  updated_at?: string //
  auth_type?: number | string // 认证类型
  auth_role?: string // 认证角色
  view_role?: string // 查看的角色
  avatar?: string // 头像
  other_info?: string // 用户其他信息
  // relations

  // other fields
}

/**
 *
 */
export interface UserRoleShopOwner {
  id?: number | string //
  spec_role?: string // 具体角色
  user_id?: number | string // 用户
  shop_name?: string // 门店名称
  shop_address?: string // 店铺地址
  shop_lng?: number | string // 经度
  shop_lat?: number | string // 纬度
  shop_contact?: string // 联系人名字
  shop_tel?: string // 联系人电话
  status?: number | string // 审核状态
  audit_no_reason?: string // 状态说明
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  shop_pic?: string // 店铺图片
  hygienic_licence_pic?: string // 卫生许可证
  food_licence_pic?: string // 食品流通许可证/食品经营许可证
  // relations

  // other fields
}

/**
 *
 */
export interface Log {
  id?: number | string //
  level?: number | string //
  category?: string //
  log_time?: number | string //
  prefix?: string //
  message?: string //
  // relations

  // other fields
}

/**
 * 搜索关键词表
 */
export interface SearchKeyword {
  id?: number | string //
  user_id?: number | string // 用户
  keywords?: string // 关键词
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  user?: User
  // other fields
}

/**
 *
 */
export interface Migration {
  version?: string //
  apply_time?: number | string //
  // relations

  // other fields
}

/**
 * 顺风车需求
 */
export interface ShareCarDemand {
  id?: number | string //
  user_id?: number | string //
  tel?: string // 联系方式
  car_shape?: string // 车型
  goods_name?: string // 货物名称
  goods_weight?: string // 货物重量
  load_at?: string // 装货时间
  deliver_price?: number | string // 运输费用
  remark?: string // 备注
  is_on_sale?: number | string // 是否上架
  start_province?: string // 出发省
  start_city?: string // 出发市
  start_district?: string // 出发县
  start_address_detail?: string // 出发详细地址
  dest_province?: string // 到达省
  dest_city?: string // 到达市
  dest_district?: string // 到达县
  dest_address_detail?: string // 到达详细地址
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 商家配送
 */
export interface ShopDeliver {
  id?: number | string //
  user_id?: number | string //
  shop_id?: number | string //
  base_price?: number | string // 基础配送费
  free_price?: number | string // 满免配送费
  deliver_province?: string // 省
  deliver_city?: string // 市
  deliver_district?: string // 县
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  deliver_limit?: number | string // 起送费
  deliver_range?: number | string // 配送范围(千米)
  deliver_range_min?: string // 配送距离最小值(千米)
  // relations

  // other fields
}

/**
 *
 */
export interface ShopNews {
  id?: number | string //
  datetime?: string // 日期
  user_id?: number | string // 用户
  shop_id?: number | string // 店铺
  pics?: string // 图片
  text?: string // 文字
  // relations

  // other fields
}

/**
 *
 */
export interface ShopOrder {
  id?: number | string //
  order_sn?: string // 订单编号
  buyer_id?: number | string // 买家
  seller_id?: number | string // 商家
  shop_id?: number | string // 店铺
  order_status?: string // 订单状态
  status_remark?: string // 状态备注
  deliver_way?: string // 配送方式
  deliver_time?: string // 配送时间
  delivered_at?: string // 确认送达时间
  buyer_tel?: string // 买家电话
  buyer_contact?: string // 买家联系人
  buyer_address?: string // 收货地址
  deliver_price?: number | string // 配送费
  wrap_price?: number | string // 包装费
  total_price?: number | string // 价格
  total_price_discounted?: number | string // 已优惠金额
  buyer_remark?: string // 卖家备注
  pay_method?: string // 支付方式
  pay_code?: string // 支付商户号
  pay_at?: string // 支付时间
  pay_status?: string // 支付状态
  prepare_pic?: string // 备货照片
  refund_status?: string // 退款状态
  refund_code?: string // 退款单号
  buyer_lng?: number | string // 经度
  buyer_lat?: number | string // 维度
  created_at?: string //
  updated_at?: string //
  pay_status_remark?: string // 支付状态说明
  fetch_contact?: string // 自提点联系人
  fetch_tel?: string // 自提点联系方式
  fetch_address?: string // 自提点地址
  fetch_remark?: string // 自提备注
  goods_info?: string // 商品信息
  order_type?: string // 订单类型
  buyer_shop?: string // 收货店铺
  quality?: number | string // 质量
  help_customer?: number | string // 代客下单
  // relations

  // other fields
}

/**
 *
 */
export interface ShopOrderItems {
  id?: number | string //
  order_sn?: string // 订单编号
  sku_sn?: string // 商品编号
  price?: number | string // 价格
  price_discounted?: number | string // 已优惠金额
  quantity?: number | string // 数量
  rating?: number | string // 用户打分
  comment?: string // 用户评价
  comment_at?: string // 评价时间
  // relations

  // other fields
}

/**
 * 自提点
 */
export interface ShopPoint {
  id?: number | string //
  user_id?: number | string //
  shop_id?: number | string //
  address?: string // 地址
  lng?: number | string // 经度
  lat?: number | string // 维度
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  remark?: string // 备注
  contact?: string // 联系人
  contact_tel?: string // 联系人电话
  // relations

  // other fields
}

/**
 * 顺风车
 */
export interface ShopShareCar {
  id?: number | string //
  user_id?: number | string //
  shop_id?: number | string //
  number_plate?: string // 车牌号
  car_weight?: string // 载重
  car_length?: string // 车场
  car_shape?: string // 车型
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  lng?: number | string // 经度
  lat?: number | string // 维度
  address?: string // 完整地址
  // relations

  // other fields
}

/**
 * 购物车
 */
export interface ShoppingCart {
  id?: number | string // id
  shop_id?: number | string // 店铺
  user_id?: number | string // 买家
  price?: number | string // 价格
  goods_id?: number | string // 商品
  quantity?: number | string // 数量
  discount_price?: number | string // 优惠价
  discount_desc?: string // 优惠说明
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 * 网站设置
 */
export interface SiteConfig {
  id?: number | string // ID
  key?: string // 配置键
  title?: string // 配置标题
  desc?: string // 配置说明
  group?: string // 分组
  type?: number | string // 配置类型
  value?: string // 配置值
  sort?: number | string // 排序
  is_use?: number | string // 使用中
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations

  // other fields
}

/**
 *
 */
export interface UserAddress {
  id?: number | string //
  user_id?: number | string // 用户id
  short_name?: string // 短名称
  address_type?: number | string // 地址类型
  province?: number | string // 省
  city?: number | string // 市
  district?: number | string // 县
  address?: string // 详细地址
  lng?: number | string // 经度
  lat?: number | string // 纬度
  is_default?: number | string // 是否默认
  created_at?: string //
  updated_at?: string //
  // relations

  // other fields
}

/**
 * 用户企业认证表
 */
export interface UserAuthCompany {
  id?: number | string //
  user_id?: number | string // 用户id
  company_name?: string // 企业名称
  unified_identity_code?: string // 统一信用代码
  legal_person_name?: string // 法人姓名
  legal_person_id_code?: string // 法人身份证号
  legal_person_tel?: string // 法人电话
  bank_name?: string // 开户行名称
  bank_account?: string // 开户银行账号
  business_licence_pic?: string // 营业许可证扫描件
  legal_id_card_pic_front?: string // 法人身份证扫描件正面
  legal_id_card_pic_back?: string // 法人身份证扫描件正面
  bank_licence_pic?: string // 银行开户许可扫描件
  status?: number | string // 审核状态
  created_at?: string //
  updated_at?: string //
  audit_no_reason?: string // 不通过原因
  // relations

  // other fields
}

/**
 * 用户个人认证表
 */
export interface UserAuthPerson {
  id?: number | string //
  user_id?: number | string // 用户id
  real_name?: string // 姓名
  id_code?: string // 身份证号
  id_card_pic_front?: string // 身份证扫描件正面
  id_card_pic_back?: string // 身份证扫描件背面
  status?: number | string // 审核状态
  created_at?: string //
  updated_at?: string //
  audit_no_reason?: string // 不通过原因
  // relations

  // other fields
}

/**
 *
 */
export interface UserContact {
  id?: number | string //
  user_id?: number | string // 用户id
  short_name?: string // 短名称
  username?: string // 名字
  position?: string // 职位
  tel?: string // 电话
  qq?: string // qq
  email?: string // 邮箱
  is_default?: number | string // 是否默认
  created_at?: string //
  updated_at?: string //
  // relations

  // other fields
}

/**
 * 加工厂信息表
 */
export interface UserRoleFactory {
  id?: number | string //
  user_id?: number | string //
  spec_role?: number | string // 具体角色
  QS_licence_pic?: string // QS认证证书扫描件
  hygienic_licence_pic?: string // 卫生许可证扫描件
  grain_purchase_license_pic?: string // 粮食收购许可证扫描件
  grain_circulation_license_pic?: string // 粮食流通许可证扫描件
  animal_license_pic?: string // 动物防疫条件许可证扫描件
  safety_production_license_pic?: string // 安全生产许可证扫描件
  status?: number | string // 审核状态
  created_at?: string //
  updated_at?: string //
  audit_no_reason?: string // 不通过原因
  // relations

  // other fields
}

/**
 * 生产方信息表
 */
export interface UserRoleProductor {
  id?: number | string //
  user_id?: number | string //
  spec_role?: number | string // 具体角色
  status?: number | string // 审核状态
  created_at?: string //
  updated_at?: string //
  audit_no_reason?: string // 不通过原因
  rural_account_pic?: string // 农户户口图片
  // relations

  // other fields
}

/**
 * 仓库信息表
 */
export interface UserRoleWarehouse {
  id?: number | string //
  user_id?: number | string //
  spec_role?: number | string // 具体角色
  hygienic_licence_pic?: string // 卫生许可证扫描件
  grain_purchase_license_pic?: string // 粮食收购许可证扫描件
  grain_circulation_license_pic?: string // 粮食流通许可证扫描件
  status?: number | string // 审核状态
  created_at?: string //
  updated_at?: string //
  audit_no_reason?: string // 不通过原因
  // relations

  // other fields
}

/**
 * 评价表
 */
export interface Comment {
  id?: number | string //
  shop_id?: number | string // 店铺
  rate?: number | string // 评分
  comment?: string // 评价
  pic?: string // 图片
  goods_info?: string //
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  shop?: Shop
  // other fields
}

/**
 * 商品推荐表
 */
export interface RecommendGoods {
  id?: number | string //
  goods_id?: number | string // 商品
  reason?: string // 推荐理由
  start_at?: string | Moment // 起始日期
  end_at?: string | Moment // 结束日期
  // relations
  // other fields
}

export interface Message {
  id?: number | string //
  from_user_id?: number | string // 发信人
  to_user_id?: number | string // 收信人
  msg?: string // 消息
  is_read?: number | string // 是否已读
  created_at?: string // 创建时间
  // relations
  fromUser?: User
  toUser?: User
  // other fields
}

/**
 *
 */
export interface MessageRoom {
  id?: number | string //
  user1_id?: number | string // 用户1
  user2_id?: number | string // 用户2
  latest_msg?: string // 最新消息
  count?: number | string // 未读消息数
  updated_at?: string // 修改时间
  // relations
  user1?: User
  user2?: User
  // other fields
}

export interface Inquiry {
  inquiryGoods?: InquiryGoods[]
}

/**
 *
 */
export interface InquiryGoods {
  id?: number | string //
  inquiry_id?: number | string // 询价单
  quantity?: string // 采购数量
  goods_pic?: string
  goods_title?: string // 商品名称
  unit?: string // 单位
  demand?: string // 采购要求
  // relations
  inquiry?: Inquiry

  quoteGoods?: QuoteGoods[]
}

/**
 *
 */
export interface Inquiry {
  id?: number | string //
  user_id?: number | string // 用户
  title?: string // 询价标题
  end_at?: string // 报价截止
  has_tax?: string // 报价含税
  has_deliver_price?: string // 报价需要包含运费
  can_partial?: string // 允许只对部分商品报价
  can_change_quantity?: string // 供应商报价可改数量
  voucher_type?: string // 发票类型
  pay_method?: string | string[] // 结算方式
  address?: string // 收货地址
  contact?: string // 联系人
  tel?: string // 联系电话
  status?: string // 询价状态
  created_at?: string
  updated_at?: string
  // relations
  // other fields
}

/**
 *
 */
export interface QuoteGoods {
  id?: number | string //
  quote_id?: number | string // 报价单
  original_price?: number | string // 原价
  quote_price?: number | string // 报价
  // relations
  quote?: Quote
  // other fields

}

/**
 *
 */
export interface Quote {
  id?: number | string //
  inquiry_id?: number | string // 询价单
  user_id?: number | string // 用户
  total_price?: number | string // 总价
  landing_price?: number | string // 落地价
  created_at?: string // 创建时间
  updated_at?: string // 修改时间
  // relations
  quoteGoods?: QuoteGoods[]
  // other fields

}

/**
 *
 */
export interface CompanyLicense {
  id?: number | string //
  user_id?: number | string // 用户
  company_name?: string // 公司名
  license_pic?: string // 商家资质展示
  env_pic?: string // 商家环境展示
  // relations
  // other fields

}