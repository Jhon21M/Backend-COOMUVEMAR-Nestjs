// import {
//   Controller,
//   Get,
//   Post,
//   Patch,
//   Delete,
//   UseGuards,
//   Param,
//   ParseIntPipe,
//   Body,
// } from '@nestjs/common';
// import { GetUser } from 'src/auth/decorator';
// import { JwtGuard } from 'src/auth/guard';
// import { CreateBookmarkDto, EditBookmarkDto } from './dto';

// @UseGuards(JwtGuard)
// @Controller('bookmarks')
// export class BookmarkController {
//   constructor(private bookmarkService: BookmarkService) {}
//   @Get()
//   getBookmark(@GetUser('id') userId: number) {
//     return this.bookmarkService.getBookmark(userId);
//   }

//   @Get(':id')
//   getBookmarkById(
//     @GetUser('id') userId: number,
//     @Param('id', ParseIntPipe) bookmarkId: number,
//   ) {
//     return this.bookmarkService.getBookmarkById(userId, bookmarkId);
//   }

//   @Post()
//   creteBookmark(@GetUser('id') userId: number, @Body() dto: CreateBookmarkDto) {
//     return this.bookmarkService.creteBookmark(userId, dto);
//   }

//   @Patch(':id')
//   editBookmarkById(
//     @GetUser('id') userId: number,
//     @Param('id', ParseIntPipe) bookmarkId: number,
//     @Body() dto: EditBookmarkDto,
//   ) {
//     return this.bookmarkService.editBookmarkById(userId, bookmarkId, dto);
//   }

//   @Delete(':id')
//   deleteBookmark(
//     @GetUser('id') userId: number,
//     @Param('id', ParseIntPipe) bookmarkId: number,
//   ) {
//     return this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
//   }
// }
