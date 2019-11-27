/*
 别直接用啊
 Navicat Premium Data Transfer

 Source Server         : pgLocal
 Source Server Type    : PostgreSQL
 Source Server Version : 110005
 Source Host           : localhost:5433
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110005
 File Encoding         : 65001

 Date: 27/11/2019 11:11:44
*/


-- ----------------------------
-- Table structure for logs
-- ----------------------------
DROP TABLE IF EXISTS "public"."logs";
CREATE TABLE "public"."logs" (
  "id" varchar(25) COLLATE "pg_catalog"."default" NOT NULL,
  "like" int2,
  "title" varchar(50) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "creator" varchar(50) COLLATE "pg_catalog"."default",
  "created_at" timestamp(6),
  "modifier" varchar(255) COLLATE "pg_catalog"."default",
  "updated_at" timestamp(6)
)
;
ALTER TABLE "public"."logs" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table logs
-- ----------------------------
ALTER TABLE "public"."logs" ADD CONSTRAINT "logs_pkey" PRIMARY KEY ("id");
