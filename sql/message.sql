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

 Date: 27/11/2019 11:11:23
*/


-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS "public"."message";
CREATE TABLE "public"."message" (
  "id" varchar(25) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(50) COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "creator" varchar(50) COLLATE "pg_catalog"."default",
  "created_at" timestamp(0),
  "modifier" varchar(255) COLLATE "pg_catalog"."default",
  "updated_at" timestamptz(0)
)
;
ALTER TABLE "public"."message" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table message
-- ----------------------------
ALTER TABLE "public"."message" ADD CONSTRAINT "message_pkey" PRIMARY KEY ("id");
