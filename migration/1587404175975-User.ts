import {MigrationInterface, QueryRunner} from "typeorm";

export class User1587404175975 implements MigrationInterface {
    name = 'User1587404175975'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user_entity` (`id` varchar(36) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_9b998bada7cff93fcb953b0c37` (`username`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`", undefined);
        await queryRunner.query("DROP INDEX `IDX_9b998bada7cff93fcb953b0c37` ON `user_entity`", undefined);
        await queryRunner.query("DROP TABLE `user_entity`", undefined);
    }

}
