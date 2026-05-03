import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UsersService } from 'src/users/users.service';



@Injectable()
export class PostsService {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService
  ) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll(
    userId: number
  ) {
    const user = this.usersService.findOne(userId);
    return `This action returns all posts for user #${userId}`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
