---
layout: default
title: Hàm tử
---

# Hàm tử

Từ chương này trở đi, chúng ta sẽ đổi chiến thuật một chút (vì tôi chắc bạn đã mệt với việc nhảy qua các chủ đề khác nhau) và lao hết tốc lực vào thế giới phạm trù, lấy các cấu trúc đã gặp làm bối cảnh. Điều này sẽ cho phép chúng ta khái quát hoá một số khái niệm đã xem xét trong những cấu trúc ấy, qua đó khiến chúng (các khái niệm) có hiệu lực với mọi phạm trù.

## Những phạm trù đã gặp

Đến đây, chúng ta đã thấy nhiều phạm trù và loại phạm trù khác nhau. Hãy xem lại chúng một lần nữa:

### Phạm trù tập hợp

Chúng ta bắt đầu bằng việc tìm hiểu mẹ của mọi phạm trù --- *phạm trù tập hợp*.

![Phạm trù tập hợp](../10_functors/category_sets.svg)

Chúng ta cũng thấy nó chứa trong mình nhiều phạm trù khác, như phạm trù kiểu (thực ra là các phạm trù kiểu khác nhau, nhưng lúc này hãy nghĩ đến phạm trù chúng ta đã học (System F)).

### Các loại phạm trù đặc biệt

Chúng ta cũng học về những đối tượng đại số khác mà hoá ra chỉ là *các loại phạm trù đặc biệt*, như những phạm trù chỉ có một *đối tượng* (monoid, nhóm) và những phạm trù chỉ có một *cấu xạ* giữa hai đối tượng bất kỳ (tiền thứ tự, thứ tự bộ phận).

![Các loại phạm trù](../10_functors/category_types.svg)

### Những phạm trù khác

Chúng ta cũng định nghĩa nhiều *phạm trù dựa trên những khái niệm khác nhau*, như các phạm trù dựa trên lôgic/kiểu, và cả một số phạm trù “ít nghiêm túc hơn”, chẳng hạn thứ tự bộ phận/phạm trù pha màu.

![Phạm trù các màu](../10_functors/category_color_mixing.svg)

### Phạm trù hữu hạn

Và quan trọng nhất, chúng ta đã thấy một số phạm trù *hoàn toàn được dựng ra*, như hệ thống thứ bậc cầu thủ bóng đá của tôi. Tên gọi hình thức của chúng là *phạm trù hữu hạn*.

![Phạm trù hữu hạn](../10_functors/finite_categories.svg)

Dù bản thân chúng không hữu ích, ý tưởng đằng sau chúng rất quan trọng --- ta có thể vẽ bất kỳ tổ hợp điểm và mũi tên nào rồi gọi đó là phạm trù, giống như có thể dựng một tập hợp từ mọi tổ hợp đối tượng.

### Xem xét một số phạm trù hữu hạn

Để dùng về sau, hãy xem một số phạm trù hữu hạn quan trọng.

Phạm trù đơn giản nhất là $0$ (hãy thưởng thức sự tối giản của sơ đồ này).

![Phạm trù hữu hạn 0](../10_functors/finite_zero.svg)

Phạm trù đơn giản kế tiếp là $1$ --- gồm một đối tượng và không có cấu xạ nào ngoài cấu xạ đồng nhất của nó (như thường lệ, chúng ta không vẽ cấu xạ ấy).

![Phạm trù hữu hạn 1](../10_functors/finite_one.svg)

Nếu tăng số đối tượng lên hai, chúng ta thấy vài phạm trù thú vị hơn, chẳng hạn phạm trù $2$ chứa hai đối tượng và một cấu xạ.

![Phạm trù hữu hạn 2](../10_functors/finite_two.svg)

---

**Bài tập 1:** Chỉ còn hai phạm trù nữa có 2 đối tượng và nhiều nhất một cấu xạ giữa hai đối tượng; hãy vẽ chúng.

![Phạm trù hữu hạn 2](../10_functors/finite_two_task.svg)

---

Cuối cùng, phạm trù $3$ có 3 đối tượng và cũng có 3 cấu xạ (một trong đó là hợp thành của hai cấu xạ còn lại).

![Phạm trù hữu hạn 3](../10_functors/finite_three.svg)

## Đẳng cấu giữa các phạm trù

Nhiều phạm trù chúng ta đã thấy tương tự nhau; chẳng hạn, cả thứ tự pha màu lẫn các phạm trù biểu diễn lôgic đều có một đối tượng *lớn nhất* và một đối tượng *nhỏ nhất*. Để xác định rõ những điểm tương đồng ấy và hiểu ý nghĩa của chúng, sẽ hữu ích nếu có những cách hình thức để nối các phạm trù với nhau. Loại kết nối đơn giản nhất như vậy là đẳng cấu quen thuộc.

### Đẳng cấu tập hợp

Ở chương 1, chúng ta đã nói về *đẳng cấu tập hợp*, thiết lập sự tương đương giữa hai tập hợp. Nếu bạn đã quên, đẳng cấu tập hợp là một *hàm hai chiều* giữa hai tập hợp.

![Đẳng cấu tập hợp](../10_functors/set_isomorphism.svg)

Cũng có thể xem nó như hai hàm “sinh đôi”, mỗi hàm khi hợp thành với hàm kia đều bằng đồng nhất. Về mặt hình thức:

{: .definition}

> Hai tập hợp $A$ và $B$ là đẳng cấu (hay $A ≅ B$) nếu có các hàm $f: A \to B$ và hàm ngược của nó $g: B \to A$, sao cho $f \circ g = ID_{A}$ và $g \circ f = ID_{B}$.

### Đẳng cấu thứ tự

Sau đó, ở chương 4, chúng ta gặp *đẳng cấu thứ tự* và thấy chúng giống đẳng cấu tập hợp, nhưng có thêm một điều kiện --- ngoài việc tồn tại, các hàm xác định đẳng cấu phải bảo toàn thứ tự của các đối tượng.

![Đẳng cấu thứ tự](../10_functors/order_isomorphism.svg)

Chẳng hạn, đối tượng lớn nhất của thứ tự này phải được nối với đối tượng lớn nhất của thứ tự kia, đối tượng nhỏ nhất của thứ tự này phải được nối với đối tượng nhỏ nhất của thứ tự kia, và tương tự với mọi đối tượng nằm giữa. Về mặt hình thức.

{: .definition}

> Đẳng cấu giữa hai thứ tự là một hàm khả nghịch giữa các tập hợp nền của chúng, sao cho khi áp dụng hàm này (gọi là $F$) cho bất kỳ hai phần tử nào có một thứ tự nhất định trong tập hợp này (gọi là $a$ và $b$), ta phải thu được hai phần tử có thứ tự tương ứng trong tập hợp kia (nghĩa là $a ≤ b$ khi và chỉ khi $F(a) ≤ F(b)$).

### Đẳng cấu giữa các phạm trù

Bây giờ, chúng ta sẽ khái quát hoá định nghĩa đẳng cấu thứ tự để nó cũng áp dụng với mọi phạm trù khác (nghĩa là những phạm trù có thể có nhiều hơn một cấu xạ giữa hai đối tượng):

{: .definition}

> Cho hai phạm trù, đẳng cấu giữa chúng là một ánh xạ khả nghịch giữa các tập hợp nền của các đối tượng, *và* một ánh xạ khả nghịch giữa các cấu xạ nối chúng, ánh xạ mỗi cấu xạ của phạm trù này đến một cấu xạ *có cùng chữ ký*.

![Đẳng cấu phạm trù](../10_functors/category_isomorphism.svg)

Sau khi xem kỹ định nghĩa này, chúng ta nhận ra rằng dù nó *nghe* phức tạp hơn một chút (và *trông* rối hơn một chút) so với định nghĩa cho thứ tự, *thực ra chúng là cùng một điều*.

Chỉ là cái gọi là “ánh xạ cấu xạ” giữa những phạm trù chỉ có một cấu xạ cho mỗi hai đối tượng là hiển nhiên, nên ta có thể bỏ chúng đi.

![Đẳng cấu thứ tự](../10_functors/category_order_isomorphism_2.svg)

**Bài tập 2:** Ánh xạ cấu xạ đối với thứ tự là gì?

<!--
We always map the single morphism of the source category to the single morphism of the target category (which is guaranteed to exist, due to the *order-preserving* condition)
-->

Tuy nhiên, khi có thể có nhiều hơn một cấu xạ giữa hai đối tượng cho trước, chúng ta cần bảo đảm mỗi cấu xạ trong phạm trù nguồn có một cấu xạ tương ứng trong phạm trù đích; vì vậy, cần có ánh xạ không chỉ giữa các đối tượng của các phạm trù mà cả giữa các cấu xạ.

![Đẳng cấu phạm trù](../10_functors/category_order_isomorphism.svg)

Nhân tiện, điều chúng ta vừa làm (lấy một khái niệm được định nghĩa cho cấu trúc hẹp hơn (thứ tự) và định nghĩa lại cho cấu trúc rộng hơn (phạm trù)) gọi là *khái quát hoá* khái niệm.

### Vấn đề với đẳng cấu giữa các phạm trù

Xem kỹ hơn, chúng ta nhận ra đẳng cấu giữa các phạm trù không quá khó định nghĩa. Tuy nhiên, có một vấn đề khác, đó là chúng *không nắm bắt được bản chất của sự bằng nhau giữa các phạm trù nên là gì*. Tôi đã nghĩ ra một lời giải thích rất hay và trực quan về lý do, nhưng ~~lề sách~~ phần này quá hẹp để chứa nó. Vì vậy, chúng ta sẽ để lại cho chương sau, nơi cũng sẽ nghĩ ra một cách thích hợp hơn để định nghĩa *kết nối hai chiều* giữa các phạm trù.

Nhưng trước hết, chúng ta cần xem xét *kết nối một chiều* giữa chúng, nghĩa là *hàm tử*.

TB: Đẳng cấu giữa các phạm trù cũng *rất hiếm trong thực tế* --- ví dụ duy nhất tôi nghĩ ra là đẳng cấu Curry-Howard-Lambek ở chương trước. Đó là vì nếu hai phạm trù đẳng cấu thì chẳng có lý do gì coi chúng là các phạm trù khác nhau --- chúng là một và như nhau.

<!--
comics:
OK, I think I got it --- isomorphisms are when you have two similar pictures and you connect the dots.

Pretty much.
-->

## Hàm tử là gì

Nhà lôgic học Rudolf Carnap đặt ra thuật ngữ “functor” trong dự án hình thức hoá cú pháp của các ngôn ngữ tự nhiên như tiếng Anh, nhằm tạo một cách chính xác để chúng ta nói về khoa học. Ban đầu, hàm tử có nghĩa là một từ hoặc cụm từ mà ý nghĩa có thể được tuỳ chỉnh bằng cách kết hợp với một giá trị số, như cụm từ “nhiệt độ lúc $x$ giờ”, có nghĩa khác nhau tuỳ giá trị của $x$.

Nói cách khác, hàm tử là một cụm từ *hoạt động như hàm*, chỉ có điều không phải hàm giữa các tập hợp, mà giữa *các khái niệm ngôn ngữ* (như thời gian và nhiệt độ).

![Hàm tử theo hình dung của Rudolf Carnap.](../10_functors/functor_carnap.svg)

Sau này, một trong những người sáng lập lý thuyết phạm trù, Sanders Mac Lane, mượn từ ấy để mô tả một thứ *hoạt động như hàm giữa các phạm trù*, được ông định nghĩa như sau:

{: .definition}

> Hàm tử giữa hai phạm trù (gọi là $A$ và $B$) gồm hai ánh xạ --- một ánh xạ đưa mỗi *đối tượng* trong $A$ đến một đối tượng trong $B$, và một ánh xạ đưa mỗi *cấu xạ* giữa các đối tượng bất kỳ trong $A$ đến một cấu xạ giữa các đối tượng trong $B$, theo cách *bảo toàn cấu trúc* của phạm trù.

![Hàm tử](../10_functors/functor.svg)

Bây giờ, hãy làm rõ định nghĩa này bằng cách xem lần lượt từng thành phần.

### Ánh xạ đối tượng

Trong định nghĩa trên, chúng ta dùng từ “ánh xạ” để tránh dùng sai từ “hàm” cho một thứ không hẳn là hàm. Nhưng trong trường hợp cụ thể này, gọi ánh xạ là hàm thì hầu như chẳng phải dùng sai --- nếu bỏ qua cấu xạ và xem các phạm trù nguồn, đích như tập hợp, ánh xạ đối tượng chỉ là một hàm thông thường quen thuộc.

![Hàm tử cho các đối tượng](../10_functors/functor_objects.svg)

Định nghĩa hình thức hơn của ánh xạ đối tượng dùng khái niệm *tập hợp nền* của phạm trù: cho phạm trù $A$, tập hợp nền của $A$ là tập hợp có các đối tượng của $A$ làm phần tử. Dùng khái niệm này, ta nói ánh xạ đối tượng của một hàm tử giữa hai phạm trù là *một hàm giữa các tập hợp nền của chúng*. Định nghĩa hàm vẫn như cũ:

{: .definition}

> Hàm là một quan hệ giữa hai tập hợp, ghép mỗi phần tử của một tập hợp, gọi là *tập nguồn* của hàm, với đúng một phần tử của tập hợp khác, gọi là *tập đích* của hàm.

### Ánh xạ cấu xạ

Ánh xạ thứ hai tạo nên hàm tử là ánh xạ giữa các cấu xạ của các phạm trù. Ánh xạ này cũng giống hàm, nhưng có thêm yêu cầu rằng mỗi cấu xạ trong $A$ với nguồn và đích cho trước phải được ánh xạ đến một cấu xạ có nguồn và đích tương ứng trong $B$, theo ánh xạ đối tượng.

![Hàm tử cho các cấu xạ](../10_functors/functor_morphisms.svg)

Định nghĩa hình thức hơn của ánh xạ cấu xạ dùng khái niệm *tập hợp đồng cấu*: đây là tập hợp chứa mọi cấu xạ đi giữa hai đối tượng cho trước trong một phạm trù cho trước. Dùng khái niệm này, ta nói ánh xạ giữa các cấu xạ của hai phạm trù gồm một *tập hợp các hàm giữa những tập hợp đồng cấu tương ứng của chúng*.

![Hàm tử cho các cấu xạ](../10_functors/functor_morphisms_formal.svg)

Bạn có thấy các khái niệm *tập hợp đồng cấu* và *tập hợp nền* cho phép chúng ta “thoát” sang lý thuyết tập hợp khi định nghĩa những khái niệm phạm trù, và định nghĩa mọi thứ bằng hàm không?

### Các quy luật hàm tử

Vậy đó là hai ánh xạ (một giữa các đối tượng và một giữa các cấu xạ) tạo thành hàm tử. Nhưng không phải mọi cặp hai ánh xạ như vậy đều là hàm tử. Như đã nói, ngoài việc tồn tại, các ánh xạ phải *bảo toàn cấu trúc* của phạm trù nguồn trong phạm trù đích. Để xem điều đó nghĩa là gì, chúng ta xem lại định nghĩa phạm trù ở chương 2:

{: .definition}

> Phạm trù là một họ các *đối tượng* (ta có thể hình dung như những điểm) và *cấu xạ* (mũi tên) đi từ đối tượng này đến đối tượng khác, trong đó:
> 1. Mỗi đối tượng phải có cấu xạ đồng nhất.
> 2. Phải có cách hợp thành hai cấu xạ có chữ ký kiểu thích hợp thành cấu xạ thứ ba, theo cách có tính kết hợp.

Vậy định nghĩa này chuyển thành hai *quy luật hàm tử* sau:

{: .definition}

> Hàm tử giữa hai phạm trù (gọi là $A$ và $B$) gồm hai ánh xạ --- một ánh xạ đưa mỗi *đối tượng* trong $A$ đến một đối tượng trong $B$, và một ánh xạ đưa mỗi *cấu xạ* giữa các đối tượng bất kỳ trong $A$ đến một cấu xạ giữa các đối tượng trong $B$, theo cách *bảo toàn cấu trúc* của phạm trù:
> 1. Các hàm giữa cấu xạ phải *bảo toàn đồng nhất*, nghĩa là mọi cấu xạ đồng nhất phải được ánh xạ đến những cấu xạ đồng nhất khác.
 ![Hàm tử](../10_functors/functor_laws_identity.svg)
>
> 2. Hàm tử cũng phải *bảo toàn phép hợp thành*, nghĩa là với bất kỳ hai cấu xạ $f$ và $g$ nào, cấu xạ tương ứng với hợp thành của chúng $F(g•f)$ trong phạm trù nguồn phải được ánh xạ đến cấu xạ tương ứng với hợp thành của các cấu xạ tương ứng trong phạm trù đích, nên $F(g•f) = F(g)•F(f)$.
>
>![Hàm tử](../10_functors/functor_laws_composition.svg)

Những quy luật này hoàn tất định nghĩa hàm tử --- một khái niệm đơn giản nhưng, như chúng ta sẽ sớm thấy, rất mạnh.

Để thấy *vì sao* nó mạnh đến vậy, hãy xem một số ví dụ.

### Hàm tử trong ngôn ngữ hằng ngày

Có một lối nói phổ biến (được dùng suốt trong cuốn sách này) như sau:

> Nếu $a$ giống $F a$, thì $b$ giống $F b$.

Hay “$a$ liên hệ với $F a$ theo cùng cách mà $b$ liên hệ với $F b$”; chẳng hạn, “Nếu trường học giống doanh nghiệp, thì giáo viên giống sếp”.

Lối nói này chỉ là một cách mô tả hàm tử trong ngôn ngữ hằng ngày: điều chúng ta muốn nói là có một tập hợp kết nối nhất định (hay theo ngôn ngữ lý thuyết phạm trù, các “cấu xạ”) giữa trường học và giáo viên, tương tự các kết nối giữa doanh nghiệp và sếp; nghĩa là có một ánh xạ bảo toàn cấu trúc nào đó nối phạm trù các thứ liên quan đến trường học với phạm trù các thứ liên quan đến công việc, đưa trường học ($a$) đến doanh nghiệp ($F a$) và giáo viên ($b$) đến sếp ($F b$), sao cho các kết nối giữa trường học và giáo viên ($a \to b$) được ánh xạ đến các kết nối giữa doanh nghiệp và sếp ($F a \to F b$).

### Sơ đồ là hàm tử

> “Dấu hiệu là một thứ mà nhờ biết nó, chúng ta biết thêm điều gì đó.” — Charles Sanders Peirce

Chúng ta sẽ bắt đầu bằng một ví dụ hàm tử rất *tự quy chiếu* --- các sơ đồ/hình minh hoạ trong cuốn sách này.

Có thể bạn đã nhận thấy sơ đồ giữ vai trò đặc biệt trong lý thuyết phạm trù --- trong các lĩnh vực khác, chức năng của chúng chỉ là bổ trợ, nghĩa là chỉ cho thấy điều đã được định nghĩa theo cách khác; còn ở đây, *bản thân sơ đồ đóng vai trò định nghĩa*.

Chẳng hạn, ở chương 1, chúng ta trình bày định nghĩa phép hợp thành hàm như sau.

{: .definition}

> Hợp thành của hai hàm $f$ và $g$ là một hàm thứ ba $h$ được định nghĩa sao cho sơ đồ này giao hoán.
>
> ![Phép hợp thành hàm - định nghĩa tổng quát](../10_functors/functions_compose_general.svg)

Tất cả chúng ta đều thấy lợi ích của việc định nghĩa bằng sơ đồ thay vì viết những định nghĩa dài dòng như:

> “Giả sử bạn có ba đối tượng $a$, $b$ và $c$ cùng hai cấu xạ $f: b \to c$ và $g: a \to b$...”

Tuy nhiên, điều này (định nghĩa bằng sơ đồ) đặt ra một vấn đề --- các định nghĩa trong toán học phải hình thức, nên nếu muốn dùng sơ đồ làm định nghĩa, trước hết chúng ta phải *hình thức hoá định nghĩa của chính sơ đồ*.

Vậy làm bằng cách nào? Một nhận xét then chốt là sơ đồ trông như phạm trù hữu hạn; chẳng hạn, định nghĩa trên có cùng hình dạng với phạm trù $3$.

![Phạm trù hữu hạn 3](../10_functors/finite_three.svg)

Tuy nhiên, đó chỉ là một phần câu chuyện, vì phạm trù hữu hạn chỉ là cấu trúc, còn sơ đồ là *dấu hiệu*. Chúng là “một thứ mà nhờ biết nó, chúng ta biết thêm điều gì đó”, như câu nói nổi tiếng của Peirce (hay “...có thể dùng để nói dối”, theo lời Umberto Eco).

Vì vậy, ngoài một phạm trù hữu hạn mã hoá cấu trúc của sơ đồ, định nghĩa sơ đồ còn phải có cách “diễn giải” phạm trù ấy trong một bối cảnh khác; nghĩa là phải có *hàm tử*.

![Sơ đồ như một hàm tử](../10_functors/diagram_functor.svg)

Đây là cách khái niệm hàm tử cho phép chúng ta hình thức hoá ý niệm sơ đồ:

{: .definition}

> Một *sơ đồ* gồm một phạm trù hữu hạn (gọi là *phạm trù chỉ số*) và một hàm tử từ nó đến một phạm trù khác.

Nếu biết về ký hiệu học, bạn có thể xem phạm trù nguồn và phạm trù đích của hàm tử như *cái biểu đạt* và *cái được biểu đạt*.

Vậy bạn đã có thể thấy khái niệm hàm tử giữ vai trò rất quan trọng trong lý thuyết phạm trù. Nhờ nó, sơ đồ trong lý thuyết phạm trù có thể được *đặc tả một cách hình thức*, nghĩa là tự chúng đã là những đối tượng phạm trù *per se*.

Thậm chí bạn có thể nói chúng là những đối tượng phạm trù *par excellence* (TODO: bỏ trò đùa cuối này).

<!--
(TODO: By the way, the fact that a diagram commutes means just that the morphism in the finite category are sometimes composites of one another).
-->

### Bản đồ là hàm tử

> Bản đồ không phải lãnh thổ mà nó biểu diễn, nhưng nếu đúng, nó có cấu trúc tương tự lãnh thổ ấy, và đó là lý do nó hữu ích. --- Alfred Korzybski

Hàm tử đôi khi được gọi là “ánh xạ” có lý do chính đáng --- bản đồ, giống mọi sơ đồ khác, là hàm tử. Nếu xem một không gian chứa các thành phố và đường sá chúng ta đi lại như một phạm trù, trong đó thành phố là đối tượng và đường nối chúng là cấu xạ, thì có thể xem bản đồ đường sá như một phạm trù biểu diễn một vùng của không gian ấy, cùng với một hàm tử ánh xạ các đối tượng trên bản đồ đến những đối tượng trong thế giới thực.

![Một bản đồ và một tiền thứ tự của các lối đi trong thành phố](../10_functors/preorder_map_functor.svg)

Trên bản đồ, những cấu xạ là kết quả của phép hợp thành thường không được hiển thị, nhưng chúng ta dùng chúng suốt --- chúng được gọi là *tuyến đường*. Và quy luật bảo toàn phép hợp thành cho biết mỗi tuyến chúng ta tạo trên bản đồ đều tương ứng với một tuyến trong thế giới thực.

![Một bản đồ và một tiền thứ tự của các lối đi trong thành phố](../10_functors/preorder_map_functor_route.svg)

Chú ý rằng để là hàm tử, bản đồ không phải liệt kê *mọi* đường tồn tại trong đời thực và *mọi* phương án đi lại (“bản đồ không phải lãnh thổ”); yêu cầu duy nhất là *những đường nó liệt kê phải có thật* --- đây là đặc điểm chung của mọi quan hệ nhiều-một (nghĩa là hàm).

<!--
### Functors can also go from complex to simple

So far, we saw functors that go from a simple category, into a more complex one, which aim to *select* some objects from the target category*.

But functors can go the other way too --- from complex to simple --- those are the functors which *sort* the object of the source category into the categories that constitute the target.


Even more interestingly, we often encounter often special pairs of functors, consisting of one *selective* and one *sorting* functor that go between two categories, that kinda reverse each other. 

--> 

### Nhận thức của con người có thể có tính hàm tử

Như đã thấy, ngoài lý thuyết phạm trù, hàm tử còn xuất hiện trong nhiều lĩnh vực nghiên cứu tâm trí con người, như lôgic, ngôn ngữ học, ký hiệu học và những lĩnh vực tương tự. Tôi đã suy nghĩ về lý do trong một [bài blog](https://abuseofnotation.github.io/logic-thought) mình viết. Câu trả lời của tôi là nhận thức và tư duy của con người tự chúng có tính hàm tử: để nhận thức thế giới quanh mình, chúng ta đi qua một loạt hàm tử từ những mô hình tư duy “cấp thấp” thô sơ hơn đến những mô hình “cấp cao” trừu tượng hơn.

Ta có thể nói nhận thức bắt đầu từ dữ liệu cảm giác thô. Từ đó, chúng ta đi (bằng một hàm tử) đến một phạm trù chứa mô hình cơ bản nào đó về cách thế giới hoạt động, ánh xạ những đối tượng đang thấy đến những khái niệm đã hình thành trong tâm trí.

![Nhận thức có tính hàm tử](../10_functors/chain.svg)

Sau đó, chúng ta nối mô hình này với một mô hình (hoặc các mô hình) còn trừu tượng hơn, cho cái nhìn tổng quan ở cấp cao hơn về tình huống mình đang ở trong, một lần nữa bằng kết nối hàm tử (về mặt kỹ thuật, đây là những hàm tử từ các phạm trù con).

![Nhận thức có tính hàm tử](../10_functors/logic_thought.svg)

Bạn có thể xem đây là một chuỗi kết nối tiến từ đơn giản hơn đến trừu tượng hơn (nghĩa là từ những phạm trù có ít cấu xạ hơn đến những phạm trù có nhiều cấu xạ hơn).

Những kết nối này có bản chất hàm tử vì chỉ hoạt động theo *cấu trúc*: ý niệm về một đối tượng cho trước chẳng có điểm chung với bản thân đối tượng (chẳng hạn, ý niệm về chiếc bánh quy không tròn, không ngọt, v.v.). Điểm chung giữa ý niệm và đối tượng được biểu diễn là các kết nối giữa những ý niệm mô phỏng một số kết nối mà chiếc bánh quy trong đời thực có với những đối tượng khác.


Dĩ nhiên, tất cả điều này chỉ là suy đoán; nhưng nếu không như vậy thì làm sao chúng ta có thể hình thành suy nghĩ, chẳng hạn hình dung một người đạp xe và đâm vào cây, khi không phần nào của não (hay những xung động nó tạo ra) giống người/xe đạp/cây theo bất kỳ cách nào?

Câu trả lời là cấu trúc --- suy nghĩ có cấu trúc của tình huống, vì thế chúng chỉ đến tình huống ấy (dù không thể chỉ đến riêng từng phần tử).

## Hàm tử trong monoid

Vậy sau chuyến rẽ ngang nhỏ này, chúng ta sẽ quay lại cách làm quen thuộc.

Này, bạn có biết trong lý thuyết nhóm có một thứ rất hay gọi là *đồng cấu nhóm* không?

{: .definition}

> *Đồng cấu nhóm* (hay *đồng cấu monoid* khi nói về monoid) là một hàm $F$ giữa các tập hợp nền của các nhóm/monoid, bảo toàn phép toán nhóm, nghĩa là $F(a * b) = F(a) + F(b)$ (trong đó $+$ và $*$ là các toán tử của nhóm).

Chẳng hạn, nếu thời gian trong ngày hiện tại là 00:00 giờ (hay 12 PM), thì sau $n$ giờ sẽ là mấy giờ? Câu trả lời có thể được biểu diễn bằng một hàm có nguồn và đích là tập hợp số nguyên.

![Đồng cấu nhóm như một hàm](../10_functors/group_homomorphism_function.svg)

Hàm này thú vị --- nó bảo toàn phép cộng (mô-đun): nếu 13 giờ nữa là 1 giờ và 14 giờ nữa là 2 giờ, thì sau (13 + 14) giờ sẽ là (1 + 2) giờ.

![Đồng cấu nhóm](../10_functors/group_homomorphism.svg)

Hay viết hình thức hơn, nếu gọi nó (hàm) là $F$, ta có phương trình sau: $F(a + b) = F(a) + F(b)$ (trong đó $+$ ở vế phải nghĩa là phép cộng mô-đun). Vì phương trình này đúng, hàm $F$ là một *đồng cấu nhóm* giữa nhóm số nguyên với phép cộng và nhóm số học mô-đun cơ số 11 với phép cộng mô-đun (bạn có thể thay 11 bằng bất kỳ số nào khác).

Các nhóm không cần quá giống nhau để có đồng cấu giữa chúng. Chẳng hạn, xét hàm ánh xạ một số $n$ bất kỳ đến 2 *luỹ thừa $n$*, nghĩa là $n \to 2ⁿ$ (ở đây, một lần nữa, có thể thay 2 bằng bất kỳ số nào khác). Hàm này tạo ra một đồng cấu nhóm giữa nhóm số nguyên với phép cộng và các số nguyên với phép nhân, hay $F(a + b) = F(a) \times F(b)$.

![Đồng cấu nhóm giữa các nhóm khác nhau](../10_functors/group_homomorphism_addition_multiplication.svg)

Khoan, chúng ta đang nói về gì ấy nhỉ? À đúng rồi:

Đồng cấu nhóm là hàm tử. Để thấy vì sao, chúng ta chuyển sang cách biểu diễn nhóm theo lý thuyết phạm trù và xem lại ví dụ đầu tiên (để sơ đồ đơn giản hơn, ta dùng $mod2$ thay vì $mod11$).

![Đồng cấu nhóm như một hàm tử](../10_functors/group_homomorphism_functor.svg)

{: .theorem}
> Khi xem nhóm/monoid như phạm trù một đối tượng, đồng cấu nhóm/monoid chỉ là một hàm tử giữa các phạm trù ấy.

Hãy xem có đúng như vậy không.

### Ánh xạ đối tượng

Khi xem như phạm trù, nhóm/monoid chỉ có một đối tượng, nên giữa hai nhóm/monoid bất kỳ cũng chỉ có một ánh xạ đối tượng có thể có --- ánh xạ đưa đối tượng (duy nhất) của nhóm nguồn đến đối tượng của nhóm đích (không thể hiện trên sơ đồ).

### Ánh xạ cấu xạ

Vì điều trên, ánh xạ cấu xạ là thành phần duy nhất có ý nghĩa của đồng cấu nhóm. Theo góc nhìn lý thuyết phạm trù, các đối tượng nhóm (như $1$ và $2$ $3$, v.v.) tương ứng với các cấu xạ (như $+1$, $+2$ $+3$, v.v.), nên ánh xạ cấu xạ chỉ là ánh xạ giữa các đối tượng của nhóm, như thấy trên sơ đồ.

### Các quy luật hàm tử

Quy luật hàm tử thứ nhất hiển nhiên: nó chỉ nói đối tượng đồng nhất duy nhất của nhóm nguồn (tương ứng với cấu xạ đồng nhất của đối tượng duy nhất của nó) phải được ánh xạ đến đối tượng đồng nhất duy nhất của nhóm đích. Với nhóm, điều này thậm chí suy ra ngay từ quy luật thứ hai; còn với monoid, phải thêm nó như một điều kiện bổ sung.

Và nếu nhớ rằng phép toán nhóm kết hợp hai đối tượng tương ứng với *phép hợp thành hàm* khi xem nhóm như phạm trù, chúng ta nhận ra phương trình đồng cấu nhóm $F(a + b) = F(a) \times F(b)$ chỉ là một cách phát biểu quy luật hàm tử thứ hai: $F(g•f) = F(g)•F(f)$.

Nhiều phép toán đại số thoả mãn phương trình này; chẳng hạn, quy luật hàm tử cho đồng cấu nhóm $n \to 2ⁿ$ chỉ là quy tắc đại số nổi tiếng phát biểu rằng $gᵃ gᵇ= gᵃ⁺ᵇ$.

**Bài tập 3:** Hãy chứng minh quy luật hàm tử thứ nhất (bảo toàn đồng nhất) của nhóm có thể được chứng minh từ quy luật thứ hai. Lưu ý rằng điều này đúng với nhóm nhưng không đúng với monoid.

## Hàm tử trong thứ tự

Giờ hãy nói về một khái niệm hoàn toàn không liên quan đến hàm tử, nháy mắt nháy mắt (này, đùa dở vẫn hơn không đùa chút nào, phải không?). Trong lý thuyết thứ tự, chúng ta có khái niệm hàm giữa các thứ tự (không có gì ngạc nhiên, vì thứ tự cũng như monoid/nhóm đều dựa trên tập hợp), và một loại hàm rất thú vị, có ứng dụng trong vi tích phân và giải tích, là *hàm đơn điệu* (còn gọi là *ánh xạ đơn điệu*).

{: .definition}

> Hàm đơn điệu là hàm giữa hai thứ tự, *bảo toàn thứ tự của các đối tượng trong thứ tự nguồn ở thứ tự đích. Vậy hàm $F$ là đơn điệu khi với mọi $a$ và $b$ trong thứ tự nguồn, nếu $a ≤ b$ thì $F(a) ≤ F(b)$.

Chẳng hạn, hàm ánh xạ thời gian hiện tại đến quãng đường một đối tượng nào đó đã đi là đơn điệu, vì quãng đường đã đi tăng lên (hoặc giữ nguyên) khi thời gian tăng.

![Một hàm đơn điệu](../10_functors/monotone_map.svg)

Nếu vẽ đồ thị của hàm này hay bất kỳ hàm đơn điệu nào khác bằng đường biểu diễn, ta thấy nó chỉ đi theo một hướng (nghĩa là chỉ đi lên hoặc chỉ đi xuống).

![Một hàm đơn điệu được biểu diễn bằng đồ thị đường](../10_functors/monotone_map_plot.svg)

Bây giờ chúng ta sắp chứng minh hàm đơn điệu cũng là hàm tử; bạn sẵn sàng chưa?

{: .theorem}

Khi xem thứ tự như phạm trù mỏng, các ánh xạ đơn điệu là hàm tử.

### Ánh xạ đối tượng

Giống với phạm trù, ánh xạ đối tượng của thứ tự được biểu diễn bằng một hàm giữa các tập hợp nền của các thứ tự.

### Ánh xạ cấu xạ

Với monoid, thành phần ánh xạ đối tượng của hàm tử là hiển nhiên. Ở đây thì ngược lại: ánh xạ cấu xạ là hiển nhiên --- cho một cấu xạ giữa hai đối tượng của thứ tự nguồn, ta ánh xạ cấu xạ ấy đến cấu xạ giữa các đối tượng tương ứng của chúng trong thứ tự đích. Việc hàm đơn điệu tôn trọng thứ tự các phần tử bảo đảm cấu xạ sau tồn tại.

### Các quy luật hàm tử

Không khó để thấy ánh xạ đơn điệu tuân theo quy luật hàm tử thứ nhất, vì đồng nhất là những cấu xạ duy nhất đi giữa một đối tượng cho trước và chính nó.

Quy luật thứ hai ($F(g \circ f) = F(g) \circ F(f)$) cũng suy ra hiển nhiên --- chúng ta chỉ phải chứng minh nếu hàm $F$ bảo toàn thứ tự, nghĩa là nếu:

$$a ≤ b \to F(a) ≤ F(b)$$ 

và:

$$b ≤ c \to F(b) ≤ F(c)$$

thì rõ ràng:

$$F(a) ≤ F(c)$$

**Bài tập 4:** Hãy chỉ ra vì sao quy luật này đúng.

## Hàm tuyến tính

Được rồi, đủ những chuyện trừu tượng vô nghĩa này rồi, hãy nói về các hàm “bình thường” --- hàm giữa các số.

Trong giải tích có khái niệm *hàm tuyến tính* (còn gọi là “đa thức bậc một”):

{: .definition}

> Hàm tuyến tính là hàm dạng $f(x) = xa$, không chứa phép toán nào ngoài việc nhân đối số với một hằng số (ký hiệu bằng $a$ trong ví dụ).

Nhưng nếu bắt đầu vẽ đồ thị một số hàm như vậy, chúng ta sẽ nhận ra còn một cách khác để mô tả chúng --- đồ thị của chúng luôn gồm những đường thẳng.

![Hàm tuyến tính](../10_functors/linear_functions.svg)

**Bài tập 5:** Vì sao đồ thị của hàm tuyến tính gồm những đường thẳng?

Một tính chất thú vị khác của các hàm này là hầu hết chúng *bảo toàn* phép cộng; nghĩa là với bất kỳ $x$ và $y$ nào, bạn có $f(x) + f(y) = f(x + y)$. Chúng ta đã biết phương trình này tương đương với quy luật hàm tử thứ hai. Vậy:

{: .theorem}

> Hàm tuyến tính chỉ là hàm tử giữa monoid số tự nhiên với phép cộng và chính nó.

Như chúng ta sẽ thấy sau, chúng là ví dụ về hàm tử trong *phạm trù không gian vectơ.

![Hàm tuyến tính](../10_functors/linear_function_functor.svg)

**Bài tập 6:** Hãy chỉ ra hàm tuyến tính bảo toàn phép cộng.

Và nếu xem các số tự nhiên như một thứ tự, hàm tuyến tính cũng là hàm tử, vì mọi hàm có đồ thị là đường thẳng rõ ràng đều đơn điệu.

Tuy nhiên, lưu ý rằng không phải mọi hàm có đồ thị là đường thẳng đều bảo toàn phép cộng --- các hàm dạng $f(x) = x * a + b$, trong đó $b$ khác không, cũng là đường thẳng (và cũng được gọi là tuyến tính), nhưng không bảo toàn phép cộng.

![Hàm tuyến tính](../10_functors/linear_function_non_functor.svg)

Với những hàm ấy, công thức trên có dạng như sau: $f(x) + b + f(y) + b = f(x + y) + b$.

<!--

### The category of topological spaces

The smoothness of the mapping means that paths may stretch or collapse but not break. 
-->


## Hàm tử trong kiểu. Hàm tử danh sách

Một lý thuyết kiểu/hệ thống kiểu tạo thành một phạm trù, và trong phạm trù ấy có những hàm tử mà lập trình viên dùng hằng ngày, như hàm tử danh sách mà chúng ta sẽ lấy làm ví dụ. Hàm tử danh sách là ví dụ về hàm tử ánh xạ thế giới của các kiểu và hàm đơn giản (nguyên thuỷ) đến thế giới của các kiểu và hàm phức tạp hơn (tổng quát).

![Một hàm tử trong lập trình](../10_functors/functor_programming.svg)

Nhưng hãy bắt đầu từ những điều cơ bản: định nghĩa khái niệm hàm tử trong bối cảnh lý thuyết kiểu đơn giản chỉ là thay đổi một số thuật ngữ được dùng, và nếu muốn, đổi phông chữ trong công thức từ “modern” sang “monospaced”.

{: .definition}

> Hàm tử giữa hai ~~phạm trù~~ kiểu (gọi là `A` và `B`) gồm một ánh xạ đưa mỗi ~~đối tượng~~ *kiểu* trong `A` đến một kiểu trong `B`, và một ánh xạ đưa mỗi ~~cấu xạ~~ *hàm* giữa các kiểu trong `A` đến một hàm giữa các kiểu trong `B`, theo cách bảo toàn cấu trúc của ~~phạm trù~~ hệ thống kiểu.

So sánh những định nghĩa này khiến chúng ta nhận ra nhà toán học và lập trình viên là hai cộng đồng rất khác nhau, được gắn kết bởi việc cả hai đều dùng hàm tử (và sự yêu thích các kiểu chữ kỳ lạ).

### Ánh xạ kiểu

Thành phần đầu tiên của hàm tử là ánh xạ chuyển mỗi kiểu thành một kiểu khác, nên nó là *một mũi tên cấp kiểu*. Nhưng chúng ta đã biết những mũi tên này: theo ngôn ngữ lý thuyết kiểu, chúng được gọi là *kiểu đa hình* (vì kiểu đa hình chỉ là một mũi tên ánh xạ mọi kiểu đến những kiểu khác).

![Một hàm tử trong lập trình - ánh xạ kiểu](../10_functors/functor_programming_objects.svg)

Lưu ý rằng dù các sơ đồ trông giống nhau, mũi tên đa hình *cấp kiểu* hoàn toàn khác mũi tên đa hình *cấp giá trị*; nghĩa là mũi tên cấp kiểu* `List<A>` chuyển mỗi *kiểu* $a$ thành một *kiểu* $List\ a$ (chẳng hạn kiểu `string` thành kiểu $List\ string$, $number$ thành $List\ number$, v.v.) không phải cùng một thứ với mũi tên đa hình cấp giá trị từ `a` đến `List<a>`, hay theo ký hiệu thiên về toán lấy cảm hứng từ Haskell của chúng ta là $\forall\ a. a \to List\ a$, chuyển một giá trị kiểu $a$ thành một giá trị kiểu $List a$ (chúng ta sẽ học về các hàm đa hình cấp giá trị sau trong chương này).

### Ánh xạ hàm

Vậy ánh xạ kiểu của hàm tử đơn giản là một kiểu đa hình (ta cũng có thể có hàm tử giữa hai kiểu đa hình khác nhau, nhưng sẽ xem chúng sau). Còn *ánh xạ hàm* là gì? Đây là ánh xạ chuyển bất kỳ hàm nào hoạt động trên các kiểu đơn giản, như $string \to number$, thành một hàm giữa những kiểu tương ứng phức tạp hơn của chúng, chẳng hạn $List\ string \to List\ number$.

![Một hàm tử trong lập trình - ánh xạ hàm](../10_functors/functor_programming_morphisms.svg)

Trong lý thuyết kiểu, ánh xạ này được biểu diễn bằng một hàm bậc cao gọi là $map$ có chữ ký $(a \to b) \to (Fa \to Fb)$, trong đó $F$ đại diện cho kiểu tổng quát.

Lưu ý rằng dù bất kỳ hàm nào có chữ ký kiểu này (và tuân theo các quy luật hàm tử) đều tạo ra một hàm tử, *không phải mọi hàm tử như vậy đều hữu ích*. Thông thường chỉ có một hàm tử hợp lý cho một kiểu tổng quát cho trước, nên chúng ta nói đến *hàm tử* danh sách ấy và định nghĩa `map` trực tiếp trong kiểu dữ liệu tổng quát như một phương thức.

Với danh sách và các cấu trúc tương tự, cách cài đặt `map` *hữu ích* là cách áp dụng hàm ban đầu (đơn giản) cho mọi phần tử của danh sách.

```
class Array<A> {
  map (f: A => B): Array<B> {
    let result = [];
    for (obj of this) {
      result.push(f(obj));
    }
    return result;
  }
}
```

### Các quy luật hàm tử

Ngoài việc giúp tái sử dụng mã bằng cách đưa mọi hàm chuẩn của các kiểu đơn giản vào một bối cảnh phức tạp hơn, `map` còn cho phép chúng ta làm việc theo cách có thể dự đoán, nhờ các quy luật hàm tử; trong bối cảnh lập trình, chúng có dạng như sau.

Quy luật đồng nhất:
```
a.map(a => a) == a
```
Quy luật hợp thành:

```
a.map(f).map(g) == a.map((a) => g(f(a)))
```

**Bài tập 7:** Hãy dùng các ví dụ để tự thuyết phục mình rằng các quy luật được tuân theo.

## Hàm tử dùng để làm gì

Giờ đây, sau khi đã thấy nhiều ví dụ về hàm tử, cuối cùng chúng ta có thể thử trả lời câu hỏi đáng giá triệu đô: hàm tử dùng để làm gì và vì sao hữu ích? (Câu hỏi cũng thường được phát biểu là “Vì sao bạn đang phí thời gian của bạn/tôi vào những chuyện vô nghĩa (trừu tượng) này?”)

Chúng ta đã thấy *bản đồ là hàm tử* và biết rằng *bản đồ hữu ích*, vậy hãy bắt đầu từ đó.

Vì sao bản đồ hữu ích? Rõ ràng điều này liên quan đến việc các điểm và mũi tên trên bản đồ tương ứng với thành phố và đường sá ở nơi bạn đến, nghĩa là vì chính bản đồ là một hàm tử; nhưng còn một khía cạnh thứ hai --- bản đồ (hay ít nhất những bản đồ hữu ích) *dễ làm việc với hơn* những thứ thực tế mà chúng biểu diễn. Chẳng hạn, bản đồ đường sá hữu ích vì *nhỏ hơn* lãnh thổ được biểu diễn, nên tìm các tuyến giữa hai địa điểm cho trước bằng cách theo bản đồ dễ hơn rất nhiều so với thực sự đi hết chúng trong đời thực.

Hàm tử trong lý thuyết kiểu được dùng trong lập trình vì lý do tương tự --- các hàm dùng kiểu đơn giản như `string`, `number`, `boolean`, v.v. thì... đơn giản, ít nhất so với các hàm làm việc với danh sách và những kiểu tổng quát khác. Dùng hàm `map` cho phép chúng ta thao tác trên các kiểu ấy mà không phải nghĩ về chúng, và suy ra các hàm biến đổi chúng từ các hàm biến đổi giá trị đơn giản. Nói cách khác, hàm tử là phương tiện *trừu tượng hoá*.

Dĩ nhiên, không phải mọi tuyến trên bản đồ, và không hàm nào giữa các kiểu dữ liệu tổng quát, có thể được suy ra chỉ bằng những hàm giữa các kiểu mà chúng chứa. Điều này nói chung đúng với nhiều hàm tử “hữu ích”: vì phạm trù nguồn “đơn giản hơn” phạm trù đích, một số cấu xạ ở đích không có cấu xạ tương đương ở nguồn, nghĩa là làm mô hình đơn giản hơn tất yếu khiến nó mất một số khả năng. Đây là hệ quả của nguyên lý “bản đồ không phải lãnh thổ” (“mọi sự trừu tượng hoá đều có chỗ rò rỉ”, như Joel Spolsky nói).

## Hàm tử có điểm

Trước khi kết thúc, chúng ta sẽ xem thêm một khái niệm liên quan đến hàm tử, đặc biệt hữu ích trong lập trình --- *tự hàm tử có điểm*.

### Tự hàm tử

Để hiểu tự hàm tử có điểm là gì, trước hết chúng ta phải hiểu *tự hàm tử* là gì, và đã thấy một số ví dụ ở phần vừa rồi. Để tôi giải thích: nhìn cách những sơ đồ ở đó được vẽ, chúng ta có thể có ấn tượng hàm tử trong lập trình nối những phạm trù khác nhau.

![Một hàm tử trong lập trình](../10_functors/functor_programming.svg)

Nhưng không phải vậy: hệ thống kiểu là một phạm trù, và mọi hàm tử đều đi từ phạm trù này đến chính nó.

![Một hàm tử trong lập trình](../10_functors/functor_programming_endo.svg)

Đúng vậy, đây chính là những gì chúng ta gọi là *tự hàm tử*.

{: .definition}

> Tự hàm tử là hàm tử có cùng một phạm trù làm nguồn và đích.

### Hàm tử đồng nhất

Vậy có những ví dụ nào về tự hàm tử? Tôi muốn tập trung vào một ví dụ có lẽ sẽ quen thuộc với bạn --- đó là *hàm tử đồng nhất* của mỗi phạm trù, ánh xạ mỗi đối tượng và cấu xạ đến chính nó.

![Hàm tử đồng nhất](../10_functors/identity_functor.svg)

Nó có thể quen thuộc vì hàm tử đồng nhất giống cấu xạ đồng nhất --- cho phép chúng ta nói về những điều liên quan đến giá trị mà không thực sự đưa giá trị vào.

### Hàm tử có điểm

Cuối cùng, chúng ta có thể định nghĩa hàm tử có điểm:

{: .definition}

> Hàm tử đồng nhất, cùng mọi hàm tử khác mà hàm tử đồng nhất có thể *biến đổi tự nhiên* đến, được gọi là *hàm tử có điểm* (nghĩa là một hàm tử có điểm nếu có một biến đổi tự nhiên từ hàm tử đồng nhất đến nó).

Như chúng ta sẽ sớm thấy, hàm tử danh sách là hàm tử có điểm.

![Hàm tử có điểm](../10_functors/pointed_functor.svg)

Chúng ta vẫn chưa bàn việc một hàm tử biến đổi tự nhiên đến một hàm tử khác nghĩa là gì (dù sơ đồ giao hoán ở trên có thể cho bạn chút ý niệm); tuy nhiên, nếu chỉ tập trung vào phạm trù kiểu trong ngôn ngữ lập trình, thì *biến đổi tự nhiên chỉ là một hàm đa hình*; chẳng hạn, hàm này là $a \to List\ a$, bảo toàn cấu trúc các kiểu, nghĩa là một hàm khiến sơ đồ này giao hoán.

![Hàm tử có điểm trong Set](../10_functors/pointed_functor_set.svg)

Với hàm tử này, hàm đang nói đến là $a \to [\ a\ ]$ --- hàm đặt mỗi giá trị vào một danh sách “đơn phần tử”.

Chúng ta sẽ dừng ở đây, vì biến đổi tự nhiên là điều phức tạp và chúng ta muốn dành cả một chương (chương tiếp theo) để xem xét.

## Phạm trù của các phạm trù nhỏ

Ha, lần này tôi làm bạn bất ngờ rồi (hay ít nhất tôi *hy vọng* vậy) --- có lẽ bạn nghĩ tôi sẽ không giới thiệu thêm phạm trù nào trong chương này, nhưng đó chính là điều tôi sắp làm. Và (lại bất ngờ nữa) phạm trù mới sẽ không phải phạm trù hàm tử (đừng lo, chúng ta sẽ giới thiệu nó ở chương sau). Thay vào đó, chúng ta sẽ xem xét phạm trù của các phạm trù (nhỏ):

{: .definition}

> Phạm trù của các phạm trù nhỏ là một phạm trù có các phạm trù nhỏ (như $Set$ - phạm trù tập hợp, $Mon$ - phạm trù monoid, $Ord$ - phạm trù thứ tự, v.v.) làm đối tượng và hàm tử làm cấu xạ.

![Phạm trù của các phạm trù](../10_functors/category_of_categories.svg)

Chúng ta chưa nhắc đến việc hàm tử có thể hợp thành (và còn có tính kết hợp), nhưng vì hàm tử chỉ là một nhóm hàm, điều này chẳng có gì ngạc nhiên.

**Bài tập 8:** Hãy xem lại định nghĩa hàm tử và tìm hiểu cách các hàm tử hợp thành.

**Bài tập 9:** Đối tượng đầu và đối tượng cuối của phạm trù các phạm trù nhỏ là gì?

### Phạm trù ở mọi tầng

Bản chất đệ quy của lý thuyết phạm trù đôi khi có thể khiến chúng ta bối rối: ban đầu, chúng ta nói phạm trù *được cấu thành từ đối tượng và cấu xạ*, nhưng giờ lại nói có những *cấu xạ giữa các phạm trù* (hàm tử). Hơn nữa, có một phạm trù mà *các đối tượng chính là các phạm trù*. Điều này có nghĩa phạm trù là một ví dụ về... phạm trù sao? Nghe hơi kỳ lạ về mặt trực giác (chẳng hạn, bánh quy không chứa bánh quy khác, và nhà không dùng nhà làm vật liệu xây dựng), nhưng thực ra đúng như vậy. Chẳng hạn, mỗi monoid là phạm trù chỉ có một đối tượng, nhưng đồng thời có thể xem các monoid là thành viên của một phạm trù --- phạm trù monoid, nơi chúng được nối bằng các đồng cấu monoid. Chúng ta cũng có phạm trù nhóm, chẳng hạn, chứa phạm trù monoid như một phạm trù con, vì mọi monoid đều là nhóm, v.v.

Lý thuyết phạm trù quả *phân loại* mọi thứ, nên từ góc nhìn lý thuyết phạm trù, toàn bộ toán học đều là *phạm trù ở mọi tầng*. Bạn xem một phạm trù cho trước như một vũ trụ hay một điểm chỉ tuỳ vào bối cảnh. Lý thuyết phạm trù là một lý thuyết *trừu tượng*. Nghĩa là nó không tìm cách biểu diễn một tình trạng thực tế, mà cung cấp một ngôn ngữ bạn có thể dùng để thể hiện nhiều ý tưởng khác nhau.

<!--
{% if site.distribution != 'print' %}
-->

## Lời giải

---

**Bài tập 1:** Chỉ còn hai phạm trù nữa có 2 đối tượng và nhiều nhất một cấu xạ giữa hai đối tượng; hãy vẽ chúng.

Câu trả lời là đây:

![Phạm trù hữu hạn 2](../10_functors/finite_two_task_solution.svg)

Đẳng cấu có nghĩa là bằng nhau trong lý thuyết phạm trù, nên đảo mũi tên từ trái sang phải không được tính là một phạm trù mới.

Với phạm trù thứ ba, chúng ta phải chỉ rõ việc hợp thành cấu xạ với chính nó sẽ cho gì:

$$f \circ f = id$$ 

Quy luật này bảo đảm chỉ có 1 cấu xạ ngoài đồng nhất: nếu không có quy luật, bạn sẽ có phạm trù với vô số cấu xạ (xem monoid tự do ở chương monoid); nếu đổi nó thành điều khác, sẽ có hữu hạn cấu xạ nhưng vẫn nhiều hơn 1.

---

**Bài tập 2:** Ánh xạ cấu xạ đối với thứ tự là gì?

Ánh xạ cấu xạ của thứ tự chỉ gồm việc ánh xạ cấu xạ duy nhất giữa một cặp đối tượng cho trước trong thứ tự này đến cấu xạ duy nhất giữa các đối tượng tương ứng trong thứ tự kia. Điều kiện “bảo toàn thứ tự” của đẳng cấu thứ tự bảo đảm cấu xạ này tồn tại; nghĩa là nếu có $A \to B$ trong thứ tự này, bạn sẽ có $F(A) \to F(B)$ trong thứ tự kia.

---

**Bài tập 3:** Hãy chứng minh quy luật hàm tử thứ nhất (bảo toàn đồng nhất) của nhóm có thể được chứng minh từ quy luật thứ hai; nghĩa là nếu $C$ và $D$ là nhóm và $F: C \to D$ là một đồng cấu nhóm, bạn có $ID_C = F(ID_D)$. Lưu ý rằng điều này đúng với nhóm nhưng không đúng với monoid.


Chúng ta biết rằng:

$ID_D = ID_D \circ ID_D$

Nên:

$F(ID_D) = F(ID_D) \circ F(ID_D)$ (quy luật hàm tử thứ hai).

Nhưng chúng ta có thể thêm phép toán đồng nhất ở bất kỳ đâu mà không thay đổi các phương trình, nên có:

$F(ID_D) \circ ID_C = F(ID_D) \circ F(ID_D)$ (thêm đồng nhất vào phương trình).

Và khử $F(ID_D)$, ta có:

$ID_C = F(ID_D)$ 

Bước cuối chỉ đúng với nhóm, vì việc khử một cấu xạ được làm bằng cách áp dụng cấu xạ ngược của nó, còn các cấu xạ monoid không có cấu xạ ngược.

---

**Bài tập 4:** Hãy chỉ ra vì sao quy luật này đúng.

Theo ngôn ngữ phạm trù, bài toán phát biểu rằng nếu có $f : a \to b$ và $g : b \to c$ thì $F(g \circ f) = F(g) \circ F(f)$.

Chứng minh dùng cùng cách tiếp cận với Bài tập 2: vì trong thứ tự chỉ có thể có một cấu xạ với chữ ký kiểu cho trước, hai cấu xạ có cùng chữ ký kiểu phải bằng nhau.

Sau đó, nếu hợp thành hai cấu xạ ấy trong thứ tự đích ($F(g)\circ F(f)$), ta có một cấu xạ $F(a) \to F(c)$.

$$F(g)\circ F(f) : F(a) \to F(c)$$

Nếu hợp thành hai cấu xạ trong thứ tự *nguồn* rồi dùng quy luật hàm tử để có cấu xạ tương ứng trong thứ tự đích, ta được một cấu xạ khác từ đối tượng $F(a) \to F(c)$.

$$F(g \circ f) : F(a) \to F(c)$$

Nhưng vì trong thứ tự chỉ có thể có một cấu xạ với chữ ký $F(a) \to F(c)$, hai cấu xạ này phải bằng nhau:

$$F(g)\circ F(f) = F(g \circ f)$$
 
---

**Bài tập 5:** Vì sao đồ thị của hàm tuyến tính gồm những đường thẳng?

Hàm tuyến tính tăng với một tốc độ không đổi (nghĩa là đạo hàm của nó luôn là hằng số).

Độ dốc của hàm phản ánh sự thay đổi trong tốc độ tăng, nên với hàm tuyến tính, nó là một đường thẳng.

---

**Bài tập 6:** Hãy chỉ ra hàm tuyến tính bảo toàn phép cộng.

Giả sử có hàm $f$ nhân số với một hằng số $a$ nào đó; chẳng hạn, ta có:

$f(x) = a \times x$

và:

$f(y) = a \times y $

Nếu cộng hai giá trị, ta được:

$f(x) + f(y) = a \times x + a \times y $

Theo quy luật phân phối của phép cộng, ta được:

$f(x) + f(y) = a\times(x + y)$ 

nhưng theo định nghĩa $f$, ta cũng có:

$f(x + y) = a\times (x + y) $

Gộp hai biểu thức cùng bằng $a\times (x + y)$, ta được:

$f(x) + f(y) = f(x + y)$

Bạn cũng có thể chỉ ra điều này đúng theo chiều ngược lại, nhưng sẽ phức tạp hơn một chút.

---

**Bài tập 7:** Hãy dùng các ví dụ để tự thuyết phục mình rằng các quy luật được tuân theo.

Mục đích ở đây là thử nghiệm một chút để làm quen với các quy luật; bạn có thể dùng bất kỳ tập hợp và hàm nào. Đây là một ví dụ:

Quy luật đồng nhất:
```
[1, 2, 3].map(a => a) == [1, 2, 3]
```
Quy luật hợp thành:
```
let f = (a) => a + 1
let g = (a) => a * 2
[1, 2, 3].map(f).map(g) == [1, 2, 3].map((a) => g(f(a)))
```
---

**Bài tập 8:** Hãy xem lại định nghĩa hàm tử và tìm hiểu cách các hàm tử hợp thành.

Một bài tập hiển nhiên nữa, với cách đặt vấn đề có lẽ không hiển nhiên. Tất cả chỉ là xem lần lượt các thành phần tạo nên hàm tử và tìm hiểu cách các thành phần của hai hàm tử có thể hợp thành.

Hai thành phần của hàm tử là ánh xạ đối tượng và ánh xạ cấu xạ.

Ánh xạ đối tượng chỉ là hàm nối các tập hợp nền của hai phạm trù; vậy nếu có hai hàm tử với chữ ký kiểu thích hợp, chẳng hạn:

$C \to D$ 

và:

$D \to E$

thì ta cũng có hai hàm nối các tập hợp nền của những phạm trù này:

$set(C) \to set(D)$ 

và:

$set(D) \to set(E)$.

Vậy câu trả lời cho ánh xạ đối tượng là hợp thành hai hàm để có một hàm (có thể làm cơ sở cho một hàm tử $C \to D$):
$$set(C) \to set(E)$$.

Với ánh xạ cấu xạ, làm điều tương tự cho các tập hom của những phạm trù ấy.

---

**Bài tập 9:** Đối tượng đầu và đối tượng cuối của phạm trù các phạm trù nhỏ là gì?

Nếu nhớ các khái niệm đối tượng đầu và đối tượng cuối trong phạm trù tập hợp $Set$, bạn sẽ thấy về cơ bản chúng cũng như vậy trong phạm trù của các phạm trù $Cat$.

Đối tượng đầu trong $Set$ là tập hợp rỗng; phạm trù đầu trong $Cat$ là phạm trù rỗng. Hàm tử duy nhất từ phạm trù rỗng đến bất kỳ phạm trù nào khác cũng như vậy --- hàm tử không ánh xạ gì đến gì.

Đối tượng cuối trong $Set$ là tập hợp đơn phần tử; phạm trù cuối trong $Cat$ là phạm trù $1$, có một đối tượng và không cấu xạ nào ngoài đồng nhất. Hàm tử duy nhất từ bất kỳ đối tượng nào đến đối tượng cuối là hàm tử ánh xạ mọi đối tượng đến đối tượng duy nhất ấy và mọi cấu xạ đến cấu xạ duy nhất ấy.

---

<!--
{%endif%}
-->

