import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
  imports: [UsersService],
})
export class PostsModule {}
