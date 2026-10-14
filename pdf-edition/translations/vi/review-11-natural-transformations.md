# Ghi chú bản dịch Chương 8

## Phạm vi và trạng thái

- Đã dịch toàn bộ nội dung xuất bản của `_chapters/11_natural_transformations.md`, từ «Natural transformations» đến hết «Answers», theo bản nguồn được chấp nhận tại `9ea2ea38052e82176cccb25c4e75709dbb064d0d`.
- Bao gồm câu trích Mac Lane và Wittgenstein; dẫn nhập triết học; sự tương đương phạm trù; định nghĩa biến đổi và đẳng cấu tự nhiên; các ví dụ lập trình; phần xen kẽ về biến Skolem và tính tham số; nhóm tích và phạm trù tích; diễn giải bằng hàm tử của phạm trù tích; phần xen kẽ về tính tự nhiên của phép toán nhóm tích; phép hợp thành ngang, ghép bên, phép hợp thành dọc, phạm trù hàm tử, luật trao đổi và 2-phạm trù; toàn bộ chín bài tập và chín lời giải.
- Người dịch đã tự đối chiếu từng đoạn và kiểm tra bảo toàn cấu trúc/ký hiệu. Bản này sẵn sàng để duyệt nghĩa độc lập; chưa tuyên bố đã được duyệt độc lập hoặc đã kiểm tra trực quan trong PDF. Quy trình chung sẽ dựng và kiểm tra PDF.
- Không sửa nguồn tiếng Anh, hình gốc, cấu hình chung, mục lục hoặc bộ dựng. Không tạo commit trong tác vụ dịch chương này.

## Thuật ngữ và lựa chọn diễn đạt

- Theo bảng thuật ngữ chung: phạm trù, hàm tử, biến đổi tự nhiên, cấu xạ, đối tượng, tập hợp, hàm, monoid, nhóm, thứ tự, kiểu, phép hợp thành, sơ đồ, tích và đối tích. Dùng **minh hoạ** và **quả bóng** theo quy ước chung.
- `natural isomorphism` là **đẳng cấu tự nhiên**; `categorical equivalence` là **sự tương đương phạm trù**; `isomorphism invariance` là **tính bất biến qua đẳng cấu**; `up to an isomorphism` là **sai khác một đẳng cấu**.
- `initial/terminal object` là **đối tượng đầu/cuối**; `identity functor` là **hàm tử đồng nhất**; `pointed functor` là **hàm tử có điểm**; `endofunctor`, nếu cần dùng, là **tự hàm tử** theo quy ước chung.
- `thin category` là **phạm trù mỏng**; `skeleton` là **khung xương**; `equivalence class` là **lớp tương đương**; `underlying set` là **tập hợp nền**; `source/target/image` là **nguồn/đích/ảnh**.
- `generic type` là **kiểu tổng quát**; `(parametrically) polymorphic function` là **hàm đa hình (theo tham số)**; `parametricity` là **tính tham số**; `type downcasting` là **ép kiểu xuống**; `rigid type variable` là **biến kiểu cứng**; `Skolem variable` là **biến Skolem**. Giữ tên Haskell, System F, TypeScript/Typescript theo từng chỗ của nguồn và giữ mọi định danh mã.
- `naturality condition/law` là **điều kiện tự nhiên/luật tự nhiên**; `naturality square` là **hình vuông tự nhiên**; `commuting square` là **hình vuông giao hoán**.
- `product group/category` là **nhóm tích/phạm trù tích**; `Klein four` là **nhóm Klein bốn phần tử**; `horizontal/vertical composition` là **phép hợp thành ngang/dọc**; `whiskering` là **ghép bên** theo bảng thuật ngữ của dự án liên quan; `interchange law` là **luật trao đổi**; `2-morphism/category` là **2-cấu xạ/2-phạm trù**.
- Giữ các thuật ngữ cố ý ngộ nghĩnh «object mapping mapping» và «morphism mapping mapping» bằng **ánh xạ của ánh xạ đối tượng/cấu xạ**, cùng lời đùa của tác giả về việc chọn thuật ngữ.
- Dùng **họ** cho `collection/family` khi nói về các đối tượng/cấu xạ, phân biệt với **tập hợp** cho `set`. Giữ giọng thân mật, câu ngắt, câu hỏi tu từ, sự dè dặt và lời trêu đùa của tác giả.
- Tám tiêu đề cấp 1/2 khớp các mục `chapter-8-*` trong `toc.json`. Giữ «Some examples of natural transformations» dưới dạng tiêu đề Setext hai dòng; các đề mục khác giữ cấp và vị trí như nguồn.

## Các điểm của nguyên bản được giữ để duyệt

Số dòng dưới đây chỉ tới `_chapters/11_natural_transformations.md`; bản dịch giữ cùng vị trí dòng. Không tự sửa công thức, mã hoặc các kết luận của tác giả.

- **Dòng 24–38**: giữ các nhận định triết học và lịch sử của tác giả về Parmenides, Heraclitus, Russell, Wittgenstein, Nhóm Vienna và Rudolph Carnap, cùng những chỗ tác giả nói rõ «theo tôi». Không thay tên hoặc lời giải thích bằng tài liệu ngoài.
- **Dòng 77**: nguồn viết «tree routes», có vẻ không rõ nghĩa trong ngữ cảnh các giao lộ đẳng cấu. Dịch theo từ hiện có là **các tuyến đường cây**, không tự đoán thành «three routes»/ba tuyến đường hoặc thay nội dung sơ đồ. Đây là điểm cần duyệt nghĩa từ nguồn.
- **Dòng 115–123**: giữ cách nguồn nói về đẳng cấu giữa «các cấu xạ» để định nghĩa tương đương và cách mô tả khung xương bằng việc gộp đối tượng đẳng cấu. Không bổ sung một định nghĩa phạm trù tương đương khác.
- **Dòng 151 và 261**: hai lần định nghĩa sự tương đương có chỉ số hàm tử đồng nhất khác nhau. Dòng 151 viết `$f \circ g \cong ID_{B}$` và `$g \circ f \cong ID_{A}$`; dòng 261 đảo thành `$f \circ g \cong ID_{A}$` và `$g \circ f \cong ID_{B}$`. Giữ nguyên cả hai lần.
- **Dòng 183–207**: nguồn mô tả các thành phần biến đổi như mũi tên từ các đối tượng trong ảnh của hàm tử, đồng thời lấy một cấu xạ cho mỗi đối tượng nguồn. Giữ cách mô tả và bài tập liên quan, không tự thêm phân biệt trong trường hợp nhiều đối tượng nguồn có cùng ảnh.
- **Dòng 199 và 372**: giữ câu nói tính tự nhiên gần như tự động xảy ra, cùng lời đối lại sau đó rằng theo tác giả 99.999 phần trăm biến đổi không tự nhiên. Không biến tỷ lệ mang giọng đùa/dè dặt thành một kết quả thống kê đã được chứng minh.
- **Dòng 215 và 243–247**: giữ ký hiệu thành phần `α` không có chỉ số; đặc biệt, công thức chiều ngược ở dòng 247 vẫn là `$F(f) \circ  \alpha  =   \alpha  \circ G(f)$`, không thêm ký hiệu nghịch đảo.
- **Dòng 303**: nguồn lặp «natural natural isomorphism». Bản dịch bỏ một từ lặp thuần ngữ pháp, vẫn giữ **đẳng cấu tự nhiên**, cả hai công thức và phát biểu về hàm tử có điểm.
- **Dòng 317**: giữ nguyên kiểu của biến đổi `$\alpha : Set \Rightarrow Set$`, dù ở những định nghĩa khác biến đổi đi giữa hàm tử; giữ các từ gạch xoá và không sửa ký hiệu thành `F ⇒ G`.
- **Dòng 321–325**: giữ dấu ngoặc đóng thừa sau `$$a$$` và dấu ngoặc chưa đóng trong câu về `<A>`.
- **Dòng 349–357 và 414**: giữ các chữ ký `list`/`List`, mô tả `take1` lấy phần tử đầu, chữ ký `$list :: a \to list\ a$` và cách phân biệt biến đổi chỉ đổi cấu trúc với hàm chỉ đổi giá trị. Không tự chuẩn hoá các chữ ký hoặc điều kiện.
- **Dòng 448–484**: giữ những khẳng định về đặc tả biến đổi không tự nhiên trên phạm trù vô hạn và trong Haskell, gồm các điều kiện/lý do do tác giả nêu. Không bổ sung ngoại lệ từ những mở rộng ngôn ngữ khác.
- **Dòng 464–471**: đoạn TypeScript `unnatural` có `} else {` nhưng không có nhánh `if` tương ứng trong nguồn. Giữ nguyên toàn bộ mã, cùng câu «This will work» ở dòng 476; không sửa mã để biên dịch được hoặc tuyên bố đã chạy mã thành công.
- **Dòng 520–546 và 623–640**: giữ lời tác giả nói phép toán nhóm tích là phép toán tự nhiên duy nhất và là biến đổi tự nhiên, cùng chữ ký đa hình `$\forall G H. G \to H \to G \times H$` dùng trong phần xen kẽ. Không thêm các giả thiết về phép toán hay các hàm tử nguồn/đích khác.
- **Dòng 558**: nguồn gọi các thành phần của nhóm là «group objects» khi liên hệ với cấu xạ của phạm trù một đối tượng. Giữ **các đối tượng của nhóm**, không tự thay cách gọi thành «phần tử».
- **Dòng 570–579**: giữ cách dựng phạm trù tích bằng sao chép cấu xạ và định nghĩa cấu xạ thay đổi một thành phần của cặp, cùng biểu thức `$(f(c), d)$`. Không bổ sung một công thức tổng quát khác cho mọi cặp cấu xạ.
- **Dòng 596 và 604**: nguồn nói biến đổi tự nhiên «giữa» hoặc «từ» các phạm trù, thay vì giữa hai hàm tử. Giữ cách phát biểu này và định lý biểu diễn bởi `$2 \times C \to D$`.
- **Dòng 700**: nguồn viết «another way of composing categories» trong đoạn về phép hợp thành biến đổi. Giữ **một cách hợp thành phạm trù khác**, không tự thay «phạm trù» thành «biến đổi tự nhiên».
- **Dòng 704–710**: giữ ký hiệu các thành phần cấu xạ `$a: F \to G$`, `$b:G \to H$` và cách trình bày bằng hàm tử chưa có chỉ số đối tượng; không sửa sang ký hiệu thành phần khác.
- **Dòng 751–763**: nguồn phân biệt hai cặp biến đổi «dọc» và «ngang», nhưng các hình và điều kiện bắt đầu từ cùng phạm trù/hàm tử cần được đọc cùng nhau. Giữ lời mô tả, thứ tự cặp và công thức luật trao đổi nguyên văn, kể cả các chữ Hy Lạp Unicode.
- **Dòng 775**: nguồn nói mọi phạm trù đều là đối tượng của `$Cat$`, đồng thời gọi `$Cat$` là phạm trù các phạm trù nhỏ. Giữ cả hai ý, không tự bổ sung giới hạn kích thước.
- **Dòng 806**: trong lời giải Bài tập 1, cả hai hợp thành đều được ghi bằng `$ID_{A}$`. Giữ nguyên, dù định nghĩa ở dòng 138 dùng `$ID_{B}$` cho hợp thành đầu tiên.
- **Dòng 817**: lời giải Bài tập 2 nói hàm tử một-một (hay toàn ánh nếu chấp nhận nhiều mũi tên trên đối tượng) bao gồm mọi đối tượng. Giữ kết luận, không tự thay thành điều kiện toàn ánh trên đối tượng khác.
- **Dòng 889**: giữ nguyên cả ba biểu thức cho thành phần của phép hợp thành ngang, kể cả `$G'(\bar\alpha_c) ∘ \alpha_c$` và `$\bar\alpha_c ∘ \alpha_c$`, cùng hai lần nhắc «grey arrows». Không sửa chỉ số, hàm tử hoặc đổi màu mũi tên trong văn xuôi.
- **Dòng 911**: giữ đầy đủ lưu ý `head` chỉ là biến đổi tự nhiên bộ phận của `List` và cần kiểu danh sách không rỗng; không bỏ lưu ý hoặc viết lại các ví dụ trước.
- Những lỗi lặp từ/ngữ pháp thuần tuý như «He said that that», «two combine two», «sinse» được diễn đạt trôi chảy; không bỏ nội dung. Giữ câu dang dở và dấu ngắt mang giọng tác giả.
- Giữ nguyên tất cả bình luận HTML/TODO không xuất bản bằng tiếng Anh, bao gồm lời giải tạm của Bài tập 8 và các bình luận `comic`. Giữ các thẻ điều kiện Liquid với `site.distribution != 'print'` đúng như nguồn.

## Bằng chứng kiểm tra

- Cả nguồn và bản dịch có **927 dòng**; vị trí dòng trống, văn xuôi, hình, cấp đề mục, thuộc tính Markdown và thẻ Liquid khớp ở từng dòng. Đây là bằng chứng cấu trúc về độ bao phủ/thứ tự, không thay thế duyệt nghĩa độc lập.
- **359 đoạn toán**, **4 khối mã**, **6 đoạn mã nội dòng**, **68 đường dẫn hình**, **6 thẻ Liquid**, **15 khối thuộc tính Markdown** và **10 bình luận HTML** có số lượng, thứ tự và nội dung giống nguồn. Bình luận và khối mã được so sánh sau khi chuẩn hoá CRLF của nguồn thành LF.
- **36 đề mục** giữ cấp và thứ tự: **35 đề mục ATX** và **1 đề mục Setext**. Cả **8 tiêu đề cấp 1/2** khớp `toc.json`.
- **18 nhãn bài tập/lời giải** giữ số và thứ tự. Các dấu nhấn mạnh, in đậm, gạch xoá và tiền tố blockquote/danh sách được đối chiếu từng dòng.
- Không cần sửa dấu phân cách toán, bảng hoặc mã trong chương này; mọi vấn đề nguyên bản nêu trên được giữ và ghi riêng.
- Bản dịch và ghi chú lưu bằng **UTF-8 không BOM, kết thúc dòng LF**.
