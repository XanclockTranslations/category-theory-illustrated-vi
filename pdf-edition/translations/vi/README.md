# Bản dịch máy tiếng Việt

**[Machine Translated, Not Reviewed]** — Bản dịch máy chưa được con người duyệt, có thể có lỗi về ý nghĩa, thuật ngữ hoặc nội dung toán học.

Kho bản dịch: [XanclockTranslations/category-theory-illustrated-vi](https://github.com/XanclockTranslations/category-theory-illustrated-vi).

Nhánh `vietnamese-translation` bắt đầu từ `english-format-fork` tại commit
`2cc1144c92ca1dfb841039308f57e49754b052ba`. Bản nguồn của tác giả được giữ ở
`9ea2ea38052e82176cccb25c4e75709dbb064d0d`.

AI được sử dụng: **GPT-6.1 Sol (Ultra)**. Người thực hiện prompting:
**Bế Trọng Nghĩa**. Đơn vị duy trì: [XanclockTranslations](https://github.com/XanclockTranslations).

Lần duyệt đầu tiên gồm bìa đến hết phần Giới thiệu, trong một commit.
Ngày 15-10-2026, người dùng cho phép tiếp tục dịch các chương tự động.
Mỗi chương có một commit riêng cùng ghi chú rà soát; `frontmatter.json`
ghi các chương đã được đưa vào bản dựng. Các tệp đang dịch chưa có trong
danh sách ấy không được đưa vào PDF. Hiện đã dịch phần Giới thiệu và toàn bộ
tám chương đã công bố, gồm phần đọc thêm, phần bổ sung, bài tập và lời giải
có trong nguồn. Hai lượt đối chiếu AI đã hoàn tất; chưa có duyệt của con người.

| Chương | Tệp bản dịch | Ghi chú |
| --- | --- | --- |
| Giới thiệu | `00_about.md` | `review-notes.md` |
| 1. Tập hợp | `01_set.md` | `review-01-set.md` |
| 2. Từ tập hợp đến phạm trù | `02_category.md` | `review-02-category.md` |
| 3. Monoid và những cấu trúc liên quan | `03_monoid.md` | `review-03-monoid.md` |
| 4. Thứ tự | `04_order.md` | `review-04-order.md` |
| 5. Lôgic | `05_logic.md` | `review-05-logic.md` |
| 6. Kiểu | `06_type.md` | `review-06-type.md` |
| 7. Hàm tử | `10_functors.md` | `review-10-functors.md` |
| 8. Biến đổi tự nhiên | `11_natural_transformations.md` | `review-11-natural-transformations.md` |

Kết quả lượt đối chiếu thứ hai ở `independent-review.md` và
`independent-review-03-06-08.md`; các sửa đổi được áp dụng ở
`review-integration.md`. Ghi chú riêng chương phân biệt lỗi nguồn với lỗi dịch.
`verification.json` lưu phạm vi và các chỉ số của bản PDF đã kiểm tra:
476 trang, 472 lượt hình, 1.831 công thức thân bài, 8 công thức chú thích,
331 dấu trang và đủ 90 mục lục có liên kết. Hash này nhận diện bản dựng
được duyệt bằng AI; PDF dựng lại có thể có hash khác do siêu dữ liệu PDF.

## Dựng bản xem thử

Từ thư mục `pdf-edition`, sau khi cài các phụ thuộc theo README chính:

```bash
pnpm build:vi
python tools/audit_vi.py
python tools/review_book.py --vi
```

Kết quả: `output/pdf/category-theory-illustrated-vi-book.pdf`.
Bản xem thử dùng cùng bố cục Book 178 × 241 mm và cỡ chữ thân bài 11,5 pt.
Mục lục dịch cả các đề mục của chương chưa dịch, nhưng không tạo liên kết đến
những trang chưa có. Dấu `-` thay cho số trang chưa xác định. Các phần đã có
trong bản dựng có số trang, liên kết và dấu trang PDF thực tế.

`node tools/build.mjs --vi --through N` dựng đến hết Chương N (0 là Giới thiệu).
`pnpm build:vi:frontmatter` vẫn dựng riêng phần mở đầu để so sánh.

Nếu sửa chữ hoặc vị trí chữ trên bìa, hãy dựng lại SVG trước:

```bash
python tools/prepare_cover.py --labels assets/cover/labels.vi.json
pnpm build:vi
```

Bìa giữ hình minh hoạ gốc, dùng lớp chữ Unicode có thể chỉnh sửa và nhúng các
phông Noto cần thiết để hiển thị dấu tiếng Việt. Giấy phép phông nằm trong
`assets/cover/licenses/`. Dựng bìa tiếng Việt không ghi đè SVG hay thông tin
nguồn gốc của bìa tiếng Anh. `pnpm build` vẫn dựng bản tiếng Anh đầy đủ.

## Văn bản để duyệt

- `00_about.md`: bản dịch đầy đủ của `_chapters/00_about.md`.
- `publication.md`: thông tin bản dịch, nguồn, ghi công và giấy phép.
- `toc.json`: 90 đề mục mục lục, ghép theo ID và tiêu đề tiếng Anh gốc.
- `frontmatter.json`: manifest chung của bản tiếng Việt, phạm vi dựng, ghi công và các nhãn điều hướng (giữ tên tệp từ lần dựng phần mở đầu).
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
