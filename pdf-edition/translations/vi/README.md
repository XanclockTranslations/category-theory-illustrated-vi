# Bản dịch tiếng Việt: phần mở đầu

Nhánh `vietnamese-translation` bắt đầu từ `english-format-fork` tại commit
`2cc1144c92ca1dfb841039308f57e49754b052ba`. Bản nguồn của tác giả được giữ ở
`9ea2ea38052e82176cccb25c4e75709dbb064d0d`.

Lần duyệt đầu tiên chỉ gồm bìa, thông tin ấn bản, danh sách chương, mục lục và
toàn bộ phần Giới thiệu: lời tưởng niệm, câu đề từ, các mục dẫn nhập và lời cảm
ơn. Không dịch nội dung Chương 1 (Tập hợp) hoặc các chương sau trong lần này.
Toàn bộ công việc của lần duyệt này nằm trong một commit.

**Trạng thái: chờ người dùng duyệt. Không bắt đầu Chương 1 cho đến khi người
dùng cho phép tiếp tục.**

## Dựng bản xem thử

Từ thư mục `pdf-edition`, sau khi cài các phụ thuộc theo README chính:

```bash
pnpm build:vi:frontmatter
python tools/audit_vi_frontmatter.py
python tools/review_book.py --vi-frontmatter
```

Kết quả: `output/pdf/category-theory-illustrated-vi-frontmatter-book.pdf`.
Bản xem thử dùng cùng bố cục Book 178 × 241 mm và cỡ chữ thân bài 11,5 pt.
Mục lục dịch cả các đề mục của chương chưa dịch, nhưng không tạo liên kết đến
những trang chưa có. Dấu `-` thay cho số trang chưa xác định. Mục Giới thiệu có
số trang, liên kết và dấu trang PDF thực tế.

Nếu sửa chữ hoặc vị trí chữ trên bìa, hãy dựng lại SVG trước:

```bash
python tools/prepare_cover.py --labels assets/cover/labels.vi.json
pnpm build:vi:frontmatter
```

Bìa giữ hình minh hoạ gốc, dùng lớp chữ Unicode có thể chỉnh sửa và nhúng các
phông Noto cần thiết để hiển thị dấu tiếng Việt. Giấy phép phông nằm trong
`assets/cover/licenses/`. Dựng bìa tiếng Việt không ghi đè SVG hay thông tin
nguồn gốc của bìa tiếng Anh. `pnpm build` vẫn dựng bản tiếng Anh đầy đủ.

## Văn bản để duyệt

- `00_about.md`: bản dịch đầy đủ của `_chapters/00_about.md`.
- `publication.md`: thông tin bản dịch, nguồn, ghi công và giấy phép.
- `toc.json`: 90 đề mục mục lục, ghép theo ID và tiêu đề tiếng Anh gốc.
- `frontmatter.json`: phạm vi, trạng thái duyệt và các nhãn điều hướng.
- `review-notes.md`: lựa chọn dịch thuật và các điểm bất nhất của nguyên bản.

Các chương tiếng Anh và `source-lock.json` vẫn là căn cứ đối chiếu. Bộ kiểm
tra xác nhận việc chuyển văn bản đã dịch sang HTML/PDF, phạm vi bản xem thử và
điều hướng; nó không thay thế việc đọc so sánh nghĩa của bản dịch.

## Thuật ngữ làm việc

Các lựa chọn sau nhất quán với bản dịch category-theory-sciences-vi trong dự
án. Có thể điều chỉnh đồng bộ sau khi được duyệt.

| English | Tiếng Việt |
| --- | --- |
| category / category theory | phạm trù / lý thuyết phạm trù |
| functor | hàm tử |
| natural transformation | biến đổi tự nhiên |
| morphism / object | cấu xạ / đối tượng |
| set / function | tập hợp / hàm |
| group / monoid | nhóm / monoid |
| order / type | thứ tự / kiểu |
| composition / diagram | phép hợp thành / sơ đồ |
| product / coproduct | tích / đối tích |

Theo lựa chọn của người dùng, viết **minh hoạ** trong
văn bản tiếng Việt, trên bìa và trong siêu dữ liệu PDF.

Giữ tên riêng, tên sách, định danh lập trình và ký hiệu toán học. Giữ mức độ
khẳng định hoặc dè dặt của tác giả; nêu vấn đề của nguyên bản trong ghi chú
duyệt, thay vì tự ý sửa ý của tác giả.
