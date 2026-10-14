---
layout: default
title: Monoids 
---

# Monoid và những cấu trúc liên quan


Giờ đã tìm hiểu xong về phạm trù, ta hãy xem một số cấu trúc khác cũng thú vị không kém --- monoid.

## Monoid là gì

Giống như phạm trù, monoid/nhóm là những hệ trừu tượng gồm một tập hợp các phần tử và các phép toán; tuy nhiên, các phép toán ấy có dạng khác với những phép toán của phạm trù. Đây là định nghĩa:

{: .definition}

>Một monoid được xác định bởi một họ/tập hợp các phần tử $A$ (gọi là *tập hợp nền* của monoid), cùng với một *phép toán monoid* có tính kết hợp --- một quy tắc kết hợp hai phần tử để tạo ra một phần tử thứ ba cùng loại --- $A \circ A \to A$.
> Đồng thời, phải có một phần tử đồng nhất $I$, sao cho $I \circ A = A$ và $A \circ I = A$.

Ta hãy lấy những quả bóng nhiều màu quen thuộc.

![Những quả bóng](../03_monoid/balls.svg)

Ta có thể định nghĩa một monoid dựa trên tập hợp này bằng cách chỉ định một phép toán để "kết hợp" hai quả bóng thành một. Một ví dụ về phép toán như vậy là pha màu của các quả bóng như khi ta pha sơn.

![Một phép toán kết hợp các quả bóng](../03_monoid/balls_operation.svg)

Có lẽ bạn cũng nghĩ ra được những cách khác để định nghĩa một phép toán tương tự. Điều này sẽ giúp bạn nhận ra rằng có thể có nhiều cách tạo ra một monoid từ một tập hợp phần tử cho trước, nghĩa là monoid không phải bản thân tập hợp ấy, mà là tập hợp *cùng với phép toán*.

### Tính kết hợp

Giống như phép hợp thành hàm, phép toán monoid phải có *tính kết hợp*, nghĩa là cách nhóm các phần tử khi áp dụng phép toán không làm thay đổi kết quả.

![Tính kết hợp của phép toán pha màu](../03_monoid/balls_associativity.svg)

Khi một phép toán có tính kết hợp, ta có thể dùng đủ loại phép biến đổi đại số cho bất kỳ dãy hạng tử nào (hay nói cách khác, có thể suy luận bằng phương trình), chẳng hạn thay một phần tử bằng một tập hợp các phần tử hợp thành nó, hoặc thêm một hạng tử có mặt ở cả hai vế của phương trình mà vẫn giữ được sự bằng nhau của các hạng tử hiện có.

![Tính kết hợp của phép toán pha màu](../03_monoid/balls_arithmetic.svg)

### Phần tử đồng nhất

Thực ra, không phải bất kỳ phép toán (có tính kết hợp) nào để kết hợp các phần tử cũng tạo nên một monoid (nó tạo nên một *nửa nhóm*, cũng là một cấu trúc đáng quan tâm, nhưng đó là chuyện khác). Để là một monoid, tập hợp phải có cái gọi là *phần tử đồng nhất* của phép toán, một khái niệm mà bạn đã quen qua cả tập hợp lẫn phạm trù --- đó là một phần tử mà khi kết hợp với bất kỳ phần tử nào khác sẽ trả về chính phần tử ấy (không phải phần tử đồng nhất mà là phần tử kia). Hay đơn giản là $x • i = x$ và $i • x = x$ với mọi $x$.

Trong monoid pha màu của chúng ta, phần tử đồng nhất là quả bóng trắng (hoặc có lẽ là quả bóng trong suốt, nếu có).

![Phần tử đồng nhất của monoid pha màu](../03_monoid/balls_identity.svg) 

Như có lẽ bạn còn nhớ từ chương trước, phép hợp thành hàm cũng có tính kết hợp và cũng có phần tử đồng nhất, nên bạn có thể bắt đầu nghi rằng bằng cách nào đó nó tạo thành một monoid. Đúng là như vậy, nhưng có một điều cần lưu ý mà chúng ta sẽ bàn sau.

## Các monoid cơ bản


Để giữ sự hồi hộp, trước khi bàn về mối liên hệ giữa monoid và phạm trù, chúng ta sẽ xem một vài ví dụ đơn giản về monoid.

### Monoid và các số

Toán học không chỉ nghiên cứu các số, nhưng chúng quả thật hay xuất hiện trong hầu hết các lĩnh vực của toán học, và monoid cũng không ngoại lệ. Tập hợp số tự nhiên $\mathbb{N}$ ($$\{ 0, 1, 2, 3 ...\}$$) tạo thành một monoid khi đi cùng phép cộng quá đỗi quen thuộc (hay *đối với* phép cộng, như cách nói truyền thống). Monoid này được ký hiệu là $\left< \mathbb{N},+ \right>$ (nói chung, mọi monoid đều được ký hiệu bằng cách ghi tập hợp và phép toán trong cặp dấu ngoặc nhọn góc).

![Monoid các số đối với phép cộng](../03_monoid/numbers_addition.svg)

Nếu gặp $1 + 1 = 2$ trong sách giáo khoa, bạn biết mình đang đọc một thứ gì đó hoặc rất cao siêu, hoặc rất đơn giản, dù tôi cũng không chắc trường hợp hiện tại thuộc loại nào.

Dù sao thì các số tự nhiên cũng tạo thành một monoid đối với phép nhân.

![Monoid các số đối với phép nhân](../03_monoid/numbers_multiplication.svg)

**Bài tập 1:** Những phần tử đồng nhất của các monoid ấy là gì?

**Bài tập 2:** Xem xét các phép toán khác trong toán học và kiểm tra rằng chúng tạo thành monoid.

**Bài tập 3:** Các số tự nhiên tạo thành một monoid đối với phép nhân, nhưng không tạo thành một nhóm. Hãy tìm hiểu vì sao.

### Monoid và đại số Boolean

Nghĩ về những phép toán đã tìm hiểu, ta có thể nhớ đến các phép toán Boolean *and* (và) và *or* (hoặc). Phép toán *and* tạo thành một monoid trên tập hợp chỉ gồm hai giá trị $\{ True, False \}$, trong đó $True$ là phần tử đồng nhất (ký hiệu $\land$ có nghĩa là *and*).

![Những phép toán lôgic tạo thành monoid](../03_monoid/logic_monoid.svg)

Phép toán *or* cũng tạo thành một monoid tương tự.

**Bài tập 4:** Chứng minh rằng **and** $\land$ có tính kết hợp bằng cách khai triển công thức $(A \land B) \land C = A \land (B \land C)$ với tất cả các giá trị có thể có. Làm tương tự với *or*.
**Bài tập 5:** Những phần tử đồng nhất của các phép toán *or* là gì?

## Phép toán của monoid dưới góc nhìn tập hợp


Bây giờ ta đã biết phép toán monoid là gì, và thậm chí đã thấy vài ví dụ đơn giản. Tuy nhiên, ta chưa từng định nghĩa quy tắc/phép toán monoid một cách hình thức, tức là dùng ngôn ngữ lý thuyết tập hợp mà ta đã dùng để định nghĩa mọi thứ khác. Ta có thể làm vậy không? Tất nhiên là có --- mọi thứ đều có thể được định nghĩa bằng tập hợp.

Ta đã nói rằng một monoid gồm hai thứ: một tập hợp (gọi là $A$), và một phép toán monoid tác động trên tập hợp đó. Vì $A$ đã được định nghĩa trong lý thuyết tập hợp (bởi nó đơn thuần là một tập hợp), tất cả những gì ta cần làm là định nghĩa phép toán monoid.

Định nghĩa phép toán chẳng khó chút nào. Thực ra, ta đã làm điều ấy với phép toán $+$ rồi --- trong Chương 2, ta đã nói rằng *phép cộng* có thể được biểu diễn trong lý thuyết tập hợp bằng một hàm nhận tích của hai số và trả về một số (một cách hình thức, $+: \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$).

![Phép toán cộng như một hàm](../03_monoid/plus_operation.svg)

Mọi phép toán monoid khác cũng có thể được biểu diễn theo cách ấy --- bằng một hàm nhận một cặp phần tử của tập hợp nền của monoid và trả về một phần tử monoid khác.

![Phép toán pha màu như một hàm](../03_monoid/color_mixing_operation.svg)

Một cách hình thức, ta có thể định nghĩa một monoid từ bất kỳ tập hợp $A$ nào bằng cách định nghĩa một hàm (có tính kết hợp) với chữ ký kiểu $A \times A \to A$. Chỉ vậy thôi. Hay chính xác hơn, đó là *một cách* định nghĩa phép toán monoid. Còn một cách nữa mà chúng ta sẽ thấy ngay sau đây. Trước hết, ta hãy xem xét một số loại cấu trúc khác.

## Các đối tượng khác có cấu trúc tương tự monoid


Các phép toán monoid tuân theo hai luật --- chúng có *tính kết hợp* và tồn tại một *phần tử đồng nhất*. Trong một số trường hợp, ta gặp những phép toán còn tuân theo các luật khác cũng rất thú vị. Đặt thêm (hoặc bớt) các quy tắc về cách kết hợp đối tượng sẽ dẫn đến định nghĩa những cấu trúc khác tương tự monoid.

### Monoid giao hoán (abel)

Nhìn vào các luật của monoid và những ví dụ đã đưa ra, ta nhận thấy tất cả đều tuân theo thêm một quy tắc (luật) mà ta chưa chỉ rõ --- thứ tự thực hiện các phép toán không ảnh hưởng đến kết quả cuối cùng.

![Phép toán monoid giao hoán](../03_monoid/monoid_commutative.svg)

Những phép toán như vậy (các phép toán mà việc kết hợp một tập hợp phần tử cho trước cho cùng một kết quả, bất kể phần tử nào đứng trước, phần tử nào đứng sau) được gọi là phép toán *giao hoán*. Các monoid có phép toán giao hoán được gọi là *monoid giao hoán*.

Như đã nói, phép cộng cũng giao hoán --- không quan trọng việc tôi cho bạn 1 quả táo rồi thêm 2 quả, hay cho bạn 2 quả trước rồi thêm 1 quả.

![Phép toán monoid giao hoán](../03_monoid/addition_commutative.svg)

Tất cả các monoid đã xem xét cho đến giờ đều có *tính giao hoán*. Chúng ta sẽ thấy một vài monoid không giao hoán sau.

### Nhóm

Một nhóm là một monoid sao cho với mỗi phần tử, có một phần tử khác được gọi là "nghịch đảo" của phần tử thứ nhất, và phần tử ấy cùng nghịch đảo của nó triệt tiêu nhau khi áp dụng lần lượt. Những định nghĩa bằng lời như thế này khiến bạn càng trân trọng các công thức toán học:

{: .definition}
> Một nhóm là một monoid trong đó mỗi phần tử $A$ có một phần tử nghịch đảo, thường được ký hiệu là $-A$, sao cho $A \circ -A = I$ (trong đó $I$ là phần tử đồng nhất).

Nếu xem *monoid* là phương tiện mô hình hóa tác dụng của việc áp dụng một tập hợp hành động (có tính kết hợp), thì ta dùng *nhóm* để mô hình hóa tác dụng của những hành động còn *có thể đảo ngược*.

Một ví dụ hay về nhóm, liên quan đến một monoid mà ta đã tìm hiểu, là tập hợp số nguyên đối với phép cộng --- phép toán vẫn là ($+$), nhưng các đối tượng là *số nguyên* $\mathbb{Z}$, chứ không phải số tự nhiên $\mathbb{N}$ (vậy nên đó không phải $$\{ 0, 1, 2, 3 ...\}$$, mà là $$\{... -3, -2 -1, 0, 1, 2, 3 ...\}$$). Ta thêm các số âm vì các số tự nhiên không có nghịch đảo. Nghịch đảo của mỗi số là số đối của nó (nghịch đảo của số dương là số âm và ngược lại).

Trong trường hợp này, công thức trên trở thành $x + (-x) = 0$

Nghiên cứu các nhóm là một lĩnh vực lớn hơn nhiều so với lý thuyết monoid (và có lẽ lớn hơn cả bản thân lý thuyết phạm trù). Một trong những nhánh lớn nhất của nó là nghiên cứu "nhóm các đối xứng", mà chúng ta sẽ xem xét tiếp theo.

### Tóm tắt

Trước khi tiếp tục --- có thể tóm tắt những cấu trúc đại số đã thấy ở trên theo các luật định nghĩa chúng trong bảng này:

|               | Nửa nhóm      | Monoid    | Nhóm      |
|---            | ---           | ---       | ---       |
|Tính kết hợp   | X             | X         | X         |
|Đồng nhất      |               | X         | X         |
|Khả nghịch     |               |           | X         |

Và bây giờ đến nhóm các đối xứng.

## Nhóm đối xứng và phân loại nhóm


Một loại nhóm/monoid thú vị là những nhóm *đối xứng* của các hình hình học. Với một hình hình học cho trước, một đối xứng là một hành động mà sau đó hình không bị dịch khỏi vị trí (chẳng hạn, nó vẫn khớp với chính cái khuôn mà nó đã khớp trước khi áp dụng hành động).

Lần này chúng ta sẽ không dùng những quả bóng, bởi xét về đối xứng, chúng chỉ có một vị trí và do đó chỉ có một hành động --- hành động đồng nhất (nhân tiện, hành động này là nghịch đảo của chính nó).

Thay vào đó, hãy lấy tam giác này; với mục đích của chúng ta, nó cũng như bất kỳ tam giác nào khác. Ta không quan tâm đến bản thân tam giác mà quan tâm đến các phép quay của nó. Điều duy nhất ta cần tự thuyết phục mình là đây là một tam giác "chưa quay", nghĩa là tam giác biểu thị phép quay đồng nhất.

![Một tam giác](../03_monoid/symmetry_group.svg)

### Nhóm các phép quay

Trước hết, hãy xem nhóm các cách quay tam giác của chúng ta, tức là *nhóm quay* của nó. Một hình hình học có thể được quay mà không dịch khỏi vị trí đến số vị trí bằng số cạnh của nó, vậy nên với tam giác của chúng ta, có 3 vị trí.

![Nhóm các phép quay của một tam giác](../03_monoid/symmetry_rotation.svg)

Nối các điểm lại (hay trong trường hợp này là các tam giác) cho thấy chỉ có 3 phép quay có thể đưa ta từ bất kỳ trạng thái nào của tam giác sang bất kỳ trạng thái nào khác --- một *phép quay 120 độ* (tức là xoay tam giác một lần), một *phép quay 240 độ* (tức là xoay hai lần, hay tương đương, xoay một lần theo hướng ngược lại) và hành động đồng nhất là phép quay 0 độ.

![Nhóm các phép quay của một tam giác](../03_monoid/symmetry_rotation_actions.svg)

Các phép quay của một tam giác tạo thành một monoid --- *các phép quay là các đối tượng* (trong đó phép quay 0 độ là phần tử đồng nhất), và phép toán monoid kết hợp hai phép quay thành một đơn giản là thực hiện phép quay thứ nhất rồi thực hiện phép quay thứ hai.

{: .nota-bene}

Một lần nữa, lưu ý rằng các phần tử của nhóm là *các phép quay*, chứ không phải bản thân các tam giác; thực ra nhóm chẳng có gì liên quan đến tam giác, như chúng ta sẽ thấy sau.

### Nhóm và monoid cyclic

Sơ đồ liệt kê tất cả các phép quay của một hình hình học phức tạp hơn thoạt nhìn khá rối.

![Nhóm các phép quay của một hình phức tạp hơn](../03_monoid/symmetry_rotation_square.svg)

Nhưng sẽ dễ hiểu hơn nhiều nếu ta nhận ra điều sau: tuy nhóm có nhiều phép quay, và với các hình nhiều cạnh hơn thì còn nhiều hơn nữa (nếu tôi không nhầm, số phép quay bằng số cạnh), *tất cả các phép quay ấy đều có thể quy về việc lặp đi lặp lại chỉ một phép quay* (chẳng hạn phép quay 120 độ với tam giác và phép quay 45 độ với bát giác). Hãy đặt ra một ký hiệu cho phép quay này.

![Nhóm các phép quay của một tam giác](../03_monoid/symmetry_rotation_cyclic.svg)

Các nhóm đối xứng có một phép quay "chính" như vậy được gọi là cyclic

{: .definition}

>Những nhóm và monoid có một đối tượng có khả năng sinh ra tất cả các đối tượng khác bằng cách áp dụng nó lặp đi lặp lại được gọi là *nhóm cyclic*. Đối tượng "chính" của nhóm được gọi là *phần tử sinh*.

Tất cả các nhóm/monoid quay đều là nhóm cyclic. Một ví dụ khác về monoid cyclic chính là các số tự nhiên đối với phép cộng, với $+1$ là phần tử sinh.

![Monoid các số tự nhiên đối với phép cộng](../03_monoid/numbers_cyclic.svg)

Còn *nhóm* các số nguyên đối với phép cộng cũng là cyclic --- ở đây ta có thể dùng $+1$ *hoặc* $-1$ làm phần tử sinh (vì dù chọn số nào trong hai số ấy, ta cũng thu được số còn lại bằng cách áp dụng luật nghịch đảo).

![Nhóm các số nguyên đối với phép cộng](../03_monoid/integers_cyclic.svg)

Khoan đã, sao đây có thể là một nhóm cyclic khi rõ ràng chẳng có chu trình nào? Đó là vì các số nguyên tạo thành một nhóm cyclic *vô hạn*.

Một ví dụ bằng số về nhóm cyclic hữu hạn là nhóm các số nguyên đối với *số học môđun* (đôi khi còn gọi là "số học đồng hồ"). Phép toán của số học môđun dựa trên một số gọi là môđun (chẳng hạn, hãy lấy $12$). Trong đó, mỗi số được ánh xạ đến *số dư của phép chia nguyên số ấy cho môđun*.

Ví dụ: $1 \pmod{12} = 1$ (vì $1/12 = 0$ dư $1$), $2 \pmod{12} = 2$, v.v.

Nhưng $13 \pmod{12} = 1$ (vì $13/12 = 1$ dư $1$), $14 \pmod{12} = 2$, $15 \pmod{12} = 3$, v.v.

Thực chất, các số "quay vòng" và tạo thành một nhóm có số phần tử bằng môđun. Chẳng hạn, một biểu diễn bằng nhóm của số học môđun với môđun $3$ có 3 phần tử.

![Nhóm các số đối với phép cộng](../03_monoid/numbers_modular.svg)

Tất cả các nhóm cyclic có cùng số phần tử (hay có *cùng cấp*) đều đẳng cấu với nhau (những bạn đọc kỹ có thể nhận ra rằng ta chưa định nghĩa đẳng cấu giữa các nhóm là gì; những bạn đọc còn kỹ hơn có lẽ đã hình dung được nó là gì).

 Chẳng hạn, nhóm các phép quay của tam giác đẳng cấu với nhóm các số nguyên đối với phép cộng theo môđun $3$.

![Nhóm các số đối với phép cộng](../03_monoid/symmetry_modular.svg)

Tất cả các nhóm cyclic đều *giao hoán* (hay còn gọi là "abel").

**Bài tập 6:** Chứng minh rằng không có nhóm nào khác gồm 3 đối tượng ngoài $Z_3$.

Có những nhóm giao hoán không phải cyclic, nhưng như chúng ta sẽ thấy bên dưới, các khái niệm nhóm cyclic và nhóm giao hoán có liên hệ sâu sắc với nhau.

### Đẳng cấu giữa các nhóm

Ta đã nhắc đến đẳng cấu giữa các nhóm, nhưng chưa định nghĩa chúng là gì. Hãy làm điều đó ngay bây giờ:

{: .definition}

> Một đẳng cấu giữa hai nhóm là một đẳng cấu ($f$) giữa các tập hợp phần tử tương ứng của chúng, sao cho với mọi $a$ và $b$, ta có $f(a \circ b) = f(a) \circ f(b)$.

Về mặt trực quan, sơ đồ của những nhóm đẳng cấu có cùng cấu trúc.

![Đẳng cấu nhóm giữa các biểu diễn khác nhau của S3](../03_monoid/group_isomorphism.svg)

Cũng như trong lý thuyết phạm trù, trong lý thuyết nhóm, những nhóm đẳng cấu được xem là các trường hợp của cùng một nhóm. Chẳng hạn, nhóm ở trên được gọi là $Z_3$.

### Nhóm hữu hạn

Giống như với tập hợp, khái niệm đẳng cấu trong lý thuyết nhóm cho phép ta nhận diện các nhóm hữu hạn thường gặp.

Nhóm nhỏ nhất chính là nhóm tầm thường $Z_1$, chỉ có một phần tử.

![Nhóm nhỏ nhất](../03_monoid/trivial_group.svg)

Nhóm không tầm thường nhỏ nhất là nhóm $Z_2$, có hai phần tử.

![Nhóm không tầm thường nhỏ nhất](../03_monoid/smallest_group.svg)

$Z_2$ còn được gọi là *nhóm Boolean*, bởi nó đẳng cấu với tập hợp ${ True, False }$ đối với phép toán phủ định một giá trị cho trước.

Giống như $Z_3$, $Z_1$ và $Z_2$ đều là cyclic.

## Tích của nhóm và monoid


Ta đã thấy nhiều nhóm giao hoán đồng thời là cyclic, nhưng chưa thấy nhóm giao hoán nào *không* phải cyclic. Vậy hãy xem xét một vài nhóm như thế. Ở đây, thay vì tìm hiểu từng ví dụ riêng lẻ, ta sẽ trình bày cách tổng quát để tạo ra các nhóm giao hoán không cyclic --- đó là kết hợp các nhóm cyclic bằng khái niệm *tích nhóm*.

{: .definition}

> Với hai nhóm bất kỳ, ta có thể kết hợp chúng để tạo ra một nhóm thứ ba, gồm tất cả các cặp phần tử có thể có từ hai nhóm và tổng của tất cả các hành động của chúng.

Hãy xem nhóm thu được trông thế nào sau khi lấy tích của hai nhóm sau (vì chỉ có hai phần tử và một phép toán nên cả hai đều đẳng cấu với $Z_2$). Để dễ hình dung, ta có thể xem nhóm thứ nhất dựa trên phép đối xứng của một hình theo chiều dọc, còn nhóm thứ hai dựa trên phép đối xứng theo chiều ngang.

![Hai nhóm tầm thường, mỗi nhóm có hai phần tử](../03_monoid/groups_product.svg)

(một lần nữa, ta phải chọn một phần tử của mỗi nhóm để biểu thị phép quay đồng nhất, nên hãy coi các phiên bản bên trái của các hình là những phiên bản "chưa lật", còn các phiên bản bên phải đã được lật (dù chọn ngược lại cũng được))

Ta thu được tập hợp phần tử của nhóm mới bằng cách lấy *tích Descartes* của tập hợp phần tử của nhóm thứ nhất và tập hợp phần tử của nhóm thứ hai.

![Hai nhóm tầm thường và nhóm tích của chúng, chứa mọi tổ hợp của một phần tử từ nhóm thứ nhất với](../03_monoid/groups_product_four.svg)

Và *các hành động* của một nhóm tích gồm những hành động của nhóm thứ nhất kết hợp với các hành động của nhóm thứ hai, trong đó mỗi hành động chỉ áp dụng lên phần tử thuộc nhóm gốc của nó, giữ nguyên phần tử còn lại.

![Nhóm bốn Klein](../03_monoid/klein_four_as_product.svg)

Tích của hai nhóm được trình bày ở trên được gọi là *nhóm bốn Klein*, và đó là nhóm *giao hoán không cyclic* đơn giản nhất.


Một cách khác để trình bày nhóm bốn Klein là *nhóm các đối xứng của một hình chữ nhật không phải hình vuông*.

![Nhóm bốn Klein](../03_monoid/klein_four.svg)

**Bài tập 7:** Chứng minh rằng hai biểu diễn này đẳng cấu.

Dưới đây là một vài ví dụ về cách kết hợp các phần tử của nhóm bốn Klein.

![Nhóm bốn Klein](../03_monoid/klein_four_examples.svg)

(tức là các phép quay ngang/dọc triệt tiêu nhau, còn một phép quay ngang không triệt tiêu một phép quay dọc.)

Nhóm bốn Klein *không cyclic* (vì có hai phần tử sinh chứ không phải một) --- phép xoay dọc và phép xoay ngang. Tuy nhiên, nó vẫn *giao hoán*, vì thứ tự các hành động vẫn không ảnh hưởng đến kết quả cuối cùng. Thực ra, nhóm bốn Klein là *nhóm không cyclic nhỏ nhất*.

### Nhóm tích cyclic

Trong chương trước, ta đã thấy một nhóm tích *không cyclic* (nhóm bốn Klein), là tích của *các nhóm cyclic*. Hầu hết các nhóm tích (kể cả tích của các nhóm cyclic) đều không cyclic, bởi chúng có các phần tử sinh của cả hai nhóm hợp thành chúng; nghĩa là dù hai nhóm ban đầu là cyclic và do đó mỗi nhóm có 1 phần tử sinh, tích của chúng vẫn có 2 phần tử sinh. Nhưng tích của hai nhóm cyclic vẫn sẽ là cyclic nếu số phần tử của hai nhóm ấy (*cấp* của chúng) không có ước chung nào ngoài 1 (nghĩa là chúng là *các số nguyên tố cùng nhau*).

Vậy nếu bạn kết hợp hai nhóm có cấp có một ước chung nào đó (như $2$ và $2$, cả hai đều chia hết cho 2), thì tích của chúng không cyclic. Nhưng nếu bạn kết hợp hai nhóm có cấp nguyên tố cùng nhau (như $2$ và $3$), bạn sẽ thu được một nhóm cyclic.

Hơn nữa, tích của hai nhóm có cấp nguyên tố cùng nhau sẽ đẳng cấu với một nhóm cyclic có cấp bằng tích các cấp của những nhóm thành phần; chẳng hạn tích của $Z_2$ và $Z_3$ đẳng cấu với nhóm $Z_6$ ($Z_2\times Z_3 \cong Z_6$)

![Định lý phần dư Trung Hoa](../03_monoid/chinese_remainder_theorem.svg)

(phần tử sinh đơn giản là cộng 1 vào mỗi nhóm trong hai nhóm)

Đây là hệ quả của một kết quả từ thời cổ đại, được gọi là *định lý phần dư Trung Hoa*.

### Nhóm tích giao hoán

Các nhóm tích có *tính giao hoán*, với điều kiện *những nhóm hợp thành chúng* có tính giao hoán. Ta có thể thấy điều này đúng khi nhận ra rằng dù có nhiều phần tử sinh, mỗi phần tử sinh chỉ tác động lên phần riêng của nó trong nhóm, nên các phần tử sinh không can thiệp vào nhau.

### Định lý cơ bản về nhóm abel hữu hạn

Tích cho ta một cách tạo ra những nhóm giao hoán không cyclic --- bằng cách tạo tích của hai hay nhiều nhóm cyclic. Định lý cơ bản về nhóm abel hữu hạn (hay nhóm *giao hoán* hữu hạn, như cách gọi ở đây) là một kết quả cho ta biết rằng *đây là cách duy nhất* tạo ra các nhóm giao hoán không cyclic, nghĩa là


{: .theorem}

> Mọi nhóm giao hoán hữu hạn đều là nhóm cyclic hoặc tích của các nhóm cyclic.

Ta có thể dùng luật này để hiểu trực giác về nhóm giao hoán là gì, đồng thời để kiểm tra xem một nhóm cho trước có thể được phân tích thành tích của các nhóm cơ bản hơn hay không.

<!--
{% if site.distribution == 'print'%}
-->

### Monoid pha màu như một tích

Để xem có thể dùng định lý này như thế nào, hãy trở lại với monoid pha màu đã thấy trước đó.

![Nhóm pha màu](../03_monoid/balls_rule.svg)

Vì không có một màu nào khi pha với chính nó có thể tạo ra tất cả các màu khác, monoid pha màu *không cyclic*. Tuy nhiên, monoid pha màu *có tính giao hoán*. Vậy theo định lý về nhóm giao hoán hữu hạn (cũng đúng với monoid), monoid pha màu phải (đẳng cấu với) một tích.

Và không khó tìm ra các monoid hợp thành nó --- tuy không có một màu nào có thể tạo ra tất cả các màu khác, nhưng có ba màu có thể làm điều đó --- các màu cơ bản. Nhận xét này dẫn ta đến kết luận rằng monoid pha màu có thể được biểu diễn dưới dạng tích của ba monoid tương ứng với ba màu cơ bản.

![Nhóm pha màu như một tích](../03_monoid/color_mixing_product.svg)

Bạn có thể xem mỗi monoid màu là một monoid Boolean, chỉ có hai trạng thái (có màu và không có màu).

![Các nhóm cyclic hợp thành nhóm pha màu](../03_monoid/color_mixing_cyclic.svg)

Hoặc bạn có thể xem nó có nhiều trạng thái, biểu thị các mức độ đậm nhạt khác nhau.

![Nhóm cyclic biểu thị độ đậm nhạt của màu](../03_monoid/cyclic_shading.svg)

Trong cả hai trường hợp, monoid đều là cyclic.

<!--
{%endif%}
-->

## Nhóm nhị diện


Giờ hãy cùng xem xét một nhóm không giao hoán --- nhóm các phép quay *và phép đối xứng* của một hình hình học cho trước. Nó giống nhóm vừa rồi, nhưng ở đây, ngoài hành động quay mà ta đã thấy (và các hành động hợp thành của nó), còn có hành động lật hình theo chiều dọc, một phép toán tạo ra ảnh trong gương của hình:

![Phép đối xứng của một tam giác](../03_monoid/reflection.svg)

Hai phép toán này cùng các phép hợp thành của chúng tạo ra một nhóm gọi là $Dih3$, không có tính giao hoán, tức là *không giao hoán* (và hơn nữa còn là nhóm không giao hoán *nhỏ nhất*).

![Nhóm các phép quay và phép đối xứng của một tam giác](../03_monoid/symmetry_reflection.svg)

**Bài tập 8:** Chứng minh rằng nhóm này quả thực không giao hoán.

**Bài tập 9:** Ngoài việc có hai hành động chính, yếu tố quyết định nào khiến nhóm này và bất kỳ nhóm nào khác không giao hoán?

Những nhóm biểu thị tập hợp các phép quay và phép đối xứng của bất kỳ hình 2D nào được gọi là *nhóm nhị diện*.

<!--
TODO: FSM as monoids
https://faculty.uml.edu/klevasseur/ads/s-monoid-of-fsm.html
-->

## Nhóm và monoid như phạm trù


Bây giờ là lúc bật mí điều quan trọng --- *nhóm/monoid là phạm trù*. Chính xác hơn, monoid là một *loại phạm trù cụ thể* (và nhóm cũng vậy).

Điều này không có nghĩa định nghĩa mà ta đã tìm hiểu, trong đó ta mô tả chúng bằng tập hợp và phép toán hai ngôi, là sai. Nó chỉ nói rằng có một định nghĩa khác theo ngôn ngữ phạm trù, tương đương với định nghĩa ấy. Hãy cùng tìm hiểu.

### Phần tử monoid như đối tượng

Khi định nghĩa monoid, ta đã trình bày các phần tử của chúng như *đối tượng*, còn phép toán của chúng như một hàm/cấu xạ biến hai đối tượng thành một đối tượng thứ ba. Sau đó, ta giới thiệu một cách biểu diễn các phép toán như vậy bằng lý thuyết tập hợp --- dưới dạng các hàm nhận một *cặp* phần tử của tập hợp nền của monoid và trả về một phần tử monoid khác.

![Phép toán pha màu như một hàm](../03_monoid/color_mixing_operation.svg)

Theo sự tương ứng này, lần pha màu cụ thể sau trong monoid pha màu...

![Phép toán monoid](../03_monoid/operation_group.svg)

...tương ứng với *điểm* cụ thể sau trong hàm ở trên (điểm ở đây là một ánh xạ của một phần tử cụ thể của tập hợp).

![Phép toán monoid như hàm từ một cặp đối tượng đến một đối tượng thứ ba: (A X B) -> C)](../03_monoid/operation_pairs.svg)

Tuy nhiên, đây không phải cách duy nhất biểu diễn các hàm nhiều đối số theo lý thuyết tập hợp --- còn một cách khác thú vị không kém, không dựa vào bất kỳ cấu trúc dữ liệu nào mà chỉ dựa vào các hàm.

### Phần tử monoid như cấu xạ

Ta đã thấy rằng với một số nhóm, như các nhóm đối xứng và nhóm quay, các phần tử nhóm có thể được hiểu như *hành động*, thay vì đối tượng. Thực ra điều này cũng đúng với tất cả các nhóm khác; chẳng hạn, *quả bóng đỏ* trong monoid pha màu có thể được xem là hành động *thêm màu đỏ* vào hỗn hợp, số $2$ trong monoid phép cộng có thể được xem là phép toán $+2$, v.v.

Một cách hình thức, bất kỳ hàm nào nhận một cặp đối tượng đều có thể được biến đổi thành một hàm nhận một đối tượng và trả về một *hàm* nhận đối tượng còn lại rồi trả về kết quả.

![Phép toán monoid như hàm (A X B) -> C) = A -> B -> C](../03_monoid/operation_functions.svg)

Phép biến đổi này được gọi là *currying*, theo tên Haskell Curry, dù Moses Schönfinkel đã phát minh ra nó trước đó vài năm (vì lý do nào đó, cái tên *Schönfinkelisation* không được dùng rộng rãi). Vậy Schönfinkel đã phát hiện rằng hai biểu thức sau đẳng cấu.

![Sự tương đương giữa hàm đã curry và hàm chưa curry](../03_monoid/curry.svg)

Hãy lùi lại một bước và xem xét các nhóm/monoid đã tìm hiểu dưới góc nhìn của sự tương đương này; chẳng hạn, hãy xem nhóm đối xứng $Z_3$:

![Nhóm các phép quay của một tam giác - ký hiệu nhóm](../03_monoid/symmetry_rotation_actions.svg)

Các phần tử của nhóm này có thể được xem là các hàm nhận một hình và quay nó một số độ cho trước.

![Nhóm các phép quay của một tam giác - ký hiệu tập hợp](../03_monoid/symmetry_rotation_functions.svg)

Và ta có thể biểu diễn chính phép toán nhóm bằng phép hợp thành hàm.

![Nhóm các phép quay của một tam giác - ký hiệu tập hợp và ký hiệu thông thường](../03_monoid/symmetry_rotation_set.svg)

Một cách hình thức, 3 phần tử của $Z_3$ có thể được xem là 3 hàm song ánh (khả nghịch) từ một tập hợp có 3 phần tử đến chính nó (nhân tiện, trong ngữ cảnh lý thuyết nhóm, những hàm như vậy được gọi là *hoán vị*).

Ta có thể làm tương tự với monoid phép cộng --- các số có thể được xem là *phép toán*, thay vì *số lượng* (như hai quả táo, hai quả cam, v.v.), chẳng hạn hành động cộng hai vào một số lượng cho trước.

Một cách hình thức, phép toán của monoid phép cộng đã thấy ở trên có chữ ký kiểu sau.

$+: \mathbb{Z} \times \mathbb{Z} \to \mathbb{Z}$

Do đẳng cấu đã trình bày ở trên, hàm này tương đương với hàm sau.

$+: \mathbb{Z} \to (\mathbb{Z} \to \mathbb{Z})$

Khi áp dụng một phần tử của monoid vào hàm ấy (chẳng hạn $2$), kết quả là hàm $+2$, cộng 2 vào một số cho trước.

$+2: \mathbb{Z} \to \mathbb{Z}$

Và vì phép toán monoid luôn được cho trong ngữ cảnh của một monoid cụ thể, ta có thể xem phần tử $2$ và hàm $+2$ là tương đương trong ngữ cảnh của monoid đó.

$2 \cong +2$

Nói cách khác, ngoài việc biểu diễn các phần tử monoid trong tập hợp như *đối tượng* được kết hợp bằng một hàm, ta còn có thể biểu diễn chúng như chính *các hàm*.

### Phép toán monoid như phép hợp thành hàm

Như đã nói, khi các phần tử monoid được biểu diễn như hàm, phép toán monoid được biểu diễn bằng *phép hợp thành hàm*. Những hàm biểu diễn các phần tử monoid có cùng tập hợp nguồn và đích, hay có cùng *chữ ký*, như cách ta nói (một cách hình thức, chúng có kiểu $A \to A$ với một $A$ nào đó). Vì vậy, tất cả đều có thể hợp thành với nhau, và kết quả của những phép hợp thành ấy cũng có cùng chữ ký.

![Nhóm các phép quay của một tam giác - ký hiệu tập hợp](../03_monoid/symmetry_rotation_cayley.svg)

Điều này đúng với mọi monoid; chẳng hạn, các hàm số cũng có thể được kết hợp bằng phép hợp thành hàm.

$+2 \circ +3 \cong +5$

Vậy về cơ bản, những hàm biểu diễn các phần tử của một monoid cũng tạo thành một monoid đối với phép hợp thành hàm (và những hàm biểu diễn các phần tử tạo thành một nhóm cũng tạo thành một nhóm).

**Bài tập 10:** Những phần tử đồng nhất của các nhóm hàm là gì?

**Bài tập 11:** Chứng minh rằng những hàm biểu diễn các phần tử nhóm nghịch đảo cũng là nghịch đảo của nhau.


<!--
{% if site.distribution == 'print'%}
-->

### Phần xen kẽ: Currying

Như đã nói, với bất kỳ hàm nào nhận một cặp đối số thuộc các kiểu cho trước (chẳng hạn $A$ và $B$) rồi ánh xạ chúng đến một kết quả thuộc kiểu $C$, tức là $A\times B\to C$ (trong trường hợp monoid, chữ ký sẽ là $A \times A \to A$, vì mọi đối tượng monoid đều có cùng kiểu), tồn tại một hàm ánh xạ đối số thứ nhất trong hai đối số (tức là từ $A$) đến *một hàm khác* ánh xạ đối số thứ hai đến kết quả cuối cùng (tức là $B \to C$). Vậy đó là $A\to (B \to C)$, và ngược lại. Hàm này được cho bởi một hàm bậc cao gọi là `curry`.

```typescript
const curry = <A, B, C> 
    (f:(a:A, b:B) => C) => 
        (a:A) => 
            (b:B) => 
                f(a, b)
```
Và cũng quan trọng không kém là hàm ngược lại, ánh xạ một hàm đã curry đến một hàm nhiều đối số, được gọi là *uncurry*.

```typescript
const uncurry = <A, B, C> 
    (f:(a:A) => (b:B) => C) => 
        (a:A, b:B) => 
            f(a)(b)
```

Có rất nhiều điều để nói về hai hàm này, trước hết là sự tồn tại của chúng tạo ra một mối liên hệ thú vị giữa khái niệm *tích* và khái niệm *cấu xạ* trong lý thuyết phạm trù, gọi là một *liên hợp*. Nhưng chúng ta sẽ tìm hiểu điều này sau. Hiện giờ, ta quan tâm đến việc hai cách biểu diễn hàm là đẳng cấu; một cách hình thức, $A\times B\to C\cong A\to B \to C$.

Nhân tiện, đẳng cấu này cũng có thể được biểu diễn bằng ngôn ngữ lập trình. Nó tương đương với phát biểu rằng hàm sau luôn trả về `true` với bất kỳ đối số nào,

```typescript
(...args) => uncurry(curry(f))(...args) === f(...args)
```

Đây là một phía của đẳng cấu; phía còn lại là hàm tương đương dành cho các hàm đã curry.

**Bài tập 12:** Viết phía còn lại của đẳng cấu.

<!--
{%endif%}
-->

### Định lý Cayley

Hãy điểm lại: trong mục trước, ta đã chỉ ra cách các phần tử của mọi nhóm/monoid tương ứng với các hàm từ tập hợp nền của monoid đến chính nó (còn gọi là các hoán vị), và ta nói rằng những hoán vị ấy tự tạo thành một monoid đối với phép hợp thành hàm --- hãy gọi đó là monoid các hoán vị.

![Nhóm các phép quay của một tam giác - ký hiệu tập hợp](../03_monoid/symmetry_rotation_cayley.svg)

Một điều ta *chưa nói* trong mục trước: mỗi nhóm/monoid hoán vị như vậy đều đẳng cấu với monoid mà từ đó nó được dựng nên.

![Nhóm các phép quay của một tam giác --- ký hiệu tập hợp và ký hiệu thông thường](../03_monoid/symmetry_rotation_comparison.svg)

Đây là kết quả được biết đến với tên gọi định lý Cayley. Nói ngắn gọn:


{: .theorem}

> Mọi nhóm đều đẳng cấu với nhóm hoán vị tương ứng của nó.

Hay một cách hình thức, nếu dùng $Perm$ để ký hiệu nhóm hoán vị, thì định lý Cayley phát biểu rằng $Perm(A) \cong A$ với mọi $A$.

Nói cách khác, việc biểu diễn các phần tử của một monoid/nhóm như các hoán vị thực sự cho ta một biểu diễn của chính monoid ấy (đôi khi gọi là *biểu diễn chuẩn* của nó); chẳng hạn, tam giác là một hình mà nếu lật hai lần thì nó trở về vị trí ban đầu (và mọi thứ mà bạn có thể lật hai lần để trở về vị trí ban đầu đều là tam giác).

Định lý Cayley là một kết quả rất quan trọng, nên việc nó trông không mấy ấn tượng trong ngữ cảnh này chỉ cho thấy sức mạnh của khuôn khổ phạm trù (và chúng ta đã học được nhiều đến thế nào).

<!--
{% if site.distribution == 'print'%}
-->

### Phần xen kẽ: Nhóm đối xứng

Trước khi tìm hiểu, lưu ý rằng nhóm đối xứng (symmetric group) không phải là *nhóm các đối xứng* (symmetry group). Sau khi đã làm rõ điều ấy, ta có thể hiểu chúng thực sự là gì: với một số tự nhiên $n$, nhóm đối xứng của $n$, ký hiệu là $\mathrm{S}_n$ (nhóm đối xứng bậc $n$), là nhóm tất cả các hoán vị có thể có của một tập hợp có $n$ phần tử. Số phần tử của các nhóm như vậy bằng $1\times 2\times 3...\times n$, hay $n!$ (n giai thừa).

Vậy chẳng hạn, nhóm $\mathrm{S}_1$ các hoán vị của tập hợp một phần tử chỉ có 1 phần tử (vì một tập hợp 1 phần tử không có hàm nào đến chính nó ngoài hàm đồng nhất.

![Nhóm đối xứng S1](../03_monoid/s1.svg)

Nhóm $\mathrm{S}_2$ có $1 \times 2 = 2$ phần tử, vì có hai cách sắp xếp một tập hợp gồm hai phần tử.

![Nhóm đối xứng S2](../03_monoid/s2.svg)

(nhân tiện, các màu ở đây giúp bạn có trực giác về lý do số hoán vị của một tập hợp $n$ phần tử bằng $n!$).

Và với $\mathrm{S}_3$, ta đã bắt đầu cảm nhận được sức mạnh của sự tăng trưởng theo hàm mũ (và còn nhanh hơn hàm mũ!) của hàm giai thừa --- nó có $1\times 2\times 3=6$ phần tử.

![Nhóm đối xứng S3](../03_monoid/s3.svg)

Mỗi nhóm đối xứng $\mathrm{S}_n$ chứa tất cả các nhóm cấp $n$ --- điều này đúng vì (như ta đã thấy ở mục trước) mọi nhóm có $n$ phần tử đều đẳng cấu với một tập hợp hoán vị trên tập hợp $n$ phần tử, và nhóm $\mathrm{S}_n$ chứa *tất cả những* hoán vị như vậy.

Dưới đây là một vài ví dụ:
- $\mathrm{S}_1$ đẳng cấu với $Z_1$, *nhóm tầm thường*, và $\mathrm{S}_2$ đẳng cấu với $Z_2$, *nhóm Boolean* (nhưng không có nhóm đối xứng nào khác đẳng cấu với nhóm cyclic)
- Ba hoán vị phía trên của $\mathrm{S}_3$ đẳng cấu với nhóm $Z_3$.

![Nhóm đối xứng S3](../03_monoid/s3_z3.svg)

$\mathrm{S}_3$ cũng đẳng cấu với $Dih3$ (nhưng không có nhóm đối xứng nào khác đẳng cấu với một nhóm nhị diện)

Dựa vào nhận xét này, ta có thể phát biểu định lý Cayley bằng nhóm đối xứng như sau:

> Mọi nhóm đều đẳng cấu với các nhóm con của những nhóm đối xứng.

**Bài tập 13:** Chỉ ra hai phát biểu tương đương như thế nào.

Một điều thú vị: nghiên cứu lý thuyết nhóm thực ra bắt đầu từ việc xem xét các nhóm đối xứng, nên định lý này thực sự là tiền đề cho sự xuất hiện của định nghĩa thông thường về nhóm mà tất cả chúng ta đều biết và yêu thích (được rồi, ít nhất *tôi* thích nó) --- nó chứng minh rằng khái niệm được mô tả bởi định nghĩa ấy tương đương với khái niệm nhóm đối xứng đã có từ trước.

<!--
{%endif%}
-->

### Monoid như phạm trù

Ta đã thấy rằng việc chuyển các phần tử monoid thành các hành động/hàm cho ta một biểu diễn chính xác của monoid bằng tập hợp.

![Nhóm các phép quay của một tam giác - ký hiệu tập hợp](../03_monoid/symmetry_rotation_cayley.svg)

Tuy nhiên, rõ ràng chính *các hàm* của monoid mới là điều quan trọng, chứ không phải tập hợp của chúng (dù sao thì với monoid, ở đâu cũng là cùng một tập hợp), nên ta có thể thử mô tả nó bằng một sơ đồ phạm trù (bên ngoài).

![Nhóm các phép quay của một tam giác - ký hiệu phạm trù](../03_monoid/symmetry_rotation_external.svg)

Nhưng khoan đã, nếu *tập hợp* nền của monoid tương ứng với *đối tượng* trong lý thuyết phạm trù, thì phạm trù tương ứng chỉ có một đối tượng. Vậy biểu diễn đúng sẽ chỉ có một điểm mà từ đó mọi mũi tên xuất phát và cũng quay về đó.

![Nhóm các phép quay của một tam giác - ký hiệu phạm trù](../03_monoid/symmetry_rotation_category.svg)

Vậy một monoid, bất kỳ monoid nào, đều có thể được xem là một *phạm trù có một đối tượng*

### Định nghĩa hình thức

Hãy kiểm tra xem điều ấy có thực sự đúng không bằng cách xem lại định nghĩa phạm trù:

{: .definition}

> Một phạm trù là một họ *đối tượng* (ta có thể nghĩ về chúng như các điểm) và *cấu xạ* (mũi tên) đi từ đối tượng này đến đối tượng khác, trong đó:
> 1. Mỗi đối tượng phải có một cấu xạ đồng nhất.
> 2. Phải có một cách hợp thành hai cấu xạ có chữ ký kiểu phù hợp thành một cấu xạ thứ ba sao cho phép hợp thành có tính kết hợp.

Hãy xem các luật này kéo theo điều gì với phạm trù có một đối tượng:

> 1. Mỗi đối tượng phải có một cấu xạ đồng nhất.

Với phạm trù chỉ có một đối tượng, cũng sẽ có một cấu xạ đồng nhất. Và monoid quả thực có một *đối tượng* đồng nhất, khi nhìn theo ngôn ngữ phạm trù sẽ tương ứng với cấu xạ đồng nhất ấy:

> 2. Phải có một cách hợp thành hai cấu xạ có chữ ký kiểu phù hợp thành một cấu xạ thứ ba sao cho phép hợp thành có tính kết hợp.

Nhưng nếu phạm trù có một đối tượng, mọi cấu xạ đều có cùng chữ ký kiểu (chúng chỉ là $A \to A$). Vậy *tất cả các cấu xạ đều có thể hợp thành với nhau*. Phép toán monoid thực hiện chính điều ấy --- với hai đối tượng bất kỳ (hay hai cấu xạ, nếu dùng thuật ngữ phạm trù), nó tạo ra một phần tử thứ ba.

Ta thấy rằng, ngoài chi tiết hơi dễ gây nhầm lẫn là *các đối tượng monoid là các cấu xạ* khi nhìn theo ngôn ngữ phạm trù, mô tả này chính xác là mô tả monoid.

{: .definition}

> Một monoid, bất kỳ monoid nào, đều có thể được xem là một *phạm trù có một đối tượng*---các cấu xạ của phạm trù là các phần tử monoid, cấu xạ đồng nhất là phần tử đồng nhất và phép toán monoid là phép hợp thành cấu xạ. Điều ngược lại cũng đúng: mọi phạm trù có một đối tượng đều có thể được xem là một monoid

Về mặt triết học, định nghĩa monoid là một phạm trù có một đối tượng tương ứng với cách xem monoid như mô hình về cách một tập hợp hành động (có tính kết hợp) được thực hiện lên một đối tượng cho trước làm thay đổi trạng thái của nó. Với điều kiện trạng thái của đối tượng chỉ do các hành động thực hiện lên nó quyết định, ta có thể bỏ đối tượng khỏi phương trình và tập trung vào cách kết hợp các hành động. Và như thường lệ, các hành động (và phần tử) có thể là bất cứ thứ gì, từ pha màu đến thêm số lượng vào một tập hợp đồ vật cho trước, v.v.

## Cách trình bày nhóm và monoid

Trong mục trước, ta đã chứng minh rằng monoid quả thực tương đương với phạm trù có một đối tượng. Tuy nhiên, hệ quả của phát biểu này vẫn có vẻ hơi khó hiểu: liệu điều đó có nghĩa là mọi monoid và monoid (kể cả những monoid có tập hợp nền khác nhau!) đều phần nào là một? Câu trả lời là chúng quả thực tương tự nhau, ít nhất khi ta xem những monoid đẳng cấu là cùng một monoid. Những khác biệt duy nhất giữa chúng có thể được tìm thấy ở hai điều này:

1. Số cấu xạ mà chúng có.
2. Các luật chi phối phép hợp thành những cấu xạ ấy.

Một cách hình thức, tập hợp các phần tử sinh và các luật định nghĩa một monoid cho trước được gọi là *cách trình bày của monoid*, và mọi monoid đều có thể được định nghĩa bằng cách chỉ định cách trình bày của nó. Nhận xét này dẫn đến một cách hoàn toàn mới để định nghĩa monoid/monoid.

### Monoid cyclic

Hãy hình dung một tập hợp phạm trù cụ thể: các phạm trù không chỉ có một đối tượng mà còn chỉ có một cấu xạ (ngoài cấu xạ đồng nhất).

![Cách trình bày một monoid cyclic vô hạn](../03_monoid/infinite_cyclic_presentation.svg)

Các phạm trù ấy tương ứng chính xác với *monoid/monoid cyclic* (cấu xạ là phần tử sinh).

Và sự khác biệt giữa tất cả các monoid/monoid cyclic chỉ do các luật quyết định.

### Z3

Hãy hướng sự chú ý đến thành phần thứ hai của cách trình bày --- các luật mô tả kết quả của việc *hợp thành* hai cấu xạ cho trước.

Trong trường hợp monoid cyclic của chúng ta, ta đang nói đến kết quả của việc hợp thành cấu xạ duy nhất tạo nên monoid với chính nó.

Dưới đây là một luật mà ta có thể đặt ra:

> Khi hợp thành phần tử sinh với chính nó 3 lần, bạn thu được cấu xạ đồng nhất.

Ta có thể ký hiệu điều ấy như sau:

![Cách trình bày một monoid cyclic hữu hạn](../03_monoid/finite_cyclic_presentation.svg)

Vậy luật này định nghĩa monoid nào? Để tìm hiểu, ta bắt đầu hợp thành phần tử sinh của monoid với chính nó, rồi áp dụng luật, cho đến khi tìm được tất cả các dãy phép hợp thành có thể có.

![Cách trình bày một monoid cyclic hữu hạn](../03_monoid/finite_cyclic_presentation_elements.svg)

(vì nếu hợp thành cấu xạ với chính nó thêm một lần nữa, ta sẽ trở về cấu xạ đồng nhất).

Như bạn đã có thể đoán, monoid này chính là monoid $Z_3$ quen thuộc --- monoid các phép quay của tam giác, hay số học môđun với môđun 3.

Và chuyện gì xảy ra nếu ta phát biểu lại luật để thay vì 3, nó nói đến một số $n$ khác.

> Khi hợp thành phần tử sinh với chính nó $n$ lần, bạn thu được cấu xạ đồng nhất.

Điều này sẽ cho ra tất cả các monoid cyclic khác: $Z_1$ $Z_2$ $Z_3$, v.v...

### Nhóm bốn Klein

Ta cũng có thể biểu diễn các monoid tích theo cách này. Hãy lấy monoid bốn Klein làm ví dụ. Monoid bốn Klein có hai phần tử sinh thừa hưởng từ các monoid hợp thành nó (mà ta đã xem là phép quay dọc và ngang của một hình chữ nhật không phải hình vuông), mỗi phần tử sinh đi kèm một luật.

![Cách trình bày nhóm bốn Klein](../03_monoid/klein_four_presentation.svg)

Để hoàn thiện biểu diễn, ta thêm luật kết hợp hai phần tử sinh.

![Cách trình bày nhóm bốn Klein - luật thứ ba](../03_monoid/klein_four_presentation_third_law.svg)

Sau đó, nếu bắt đầu áp dụng hai phần tử sinh và áp dụng các luật, ta thu được bốn phần tử của monoid.

![Các phần tử của nhóm bốn Klein](../03_monoid/klein_four_presentation_elements.svg)

### Monoid tự do

Ta đã thấy việc lựa chọn các luật khác nhau làm nảy sinh những loại monoid khác nhau. Nhưng ta sẽ thu được gì nếu *không chọn luật nào cả*? Những monoid này (ta thu được một monoid khác tùy theo tập hợp cấu xạ đã chọn) được gọi là *monoid tự do*, với nghĩa "không bị ràng buộc bởi luật" (hoặc với nghĩa "bạn có thể nâng tập hợp phần tử sinh thành một monoid mà chẳng mất gì").

Monoid tự do chỉ có một phần tử sinh đẳng cấu với monoid các số tự nhiên.

![Monoid tự do có một phần tử sinh](../03_monoid/infinite_cyclic_presentation_elements.svg)

Ta có thể tạo một monoid tự do từ tập hợp các quả bóng nhiều màu --- các phần tử monoid sẽ là những dãy gồm tất cả các tổ hợp có thể có của các quả bóng.

![Monoid tự do có tập hợp các quả bóng làm các phần tử sinh](../03_monoid/balls_free.svg)

### Tính chất phổ dụng của monoid tự do

Monoid tự do là một loại đặc biệt, vì bạn có thể định nghĩa một hàm chuyển nó thành bất kỳ monoid nào khác có cùng tập hợp phần tử sinh, chỉ bằng cách áp dụng các luật của monoid ấy.

Chẳng hạn, nếu ta lấy monoid tự do chỉ có một phần tử sinh và áp dụng luật của $Z_3$ lên các phần tử của nó, ta thu được... một hàm từ nó đến $Z_3$,

![Monoid tự do có một phần tử sinh](../03_monoid/infinite_cyclic_presentation_z3.svg)

Và nếu lấy monoid tự do của các quả bóng rồi áp dụng các luật của monoid pha màu, ta sẽ thu được một hàm từ monoid tự do của các quả bóng đến monoid pha màu.

![Chuyển các phần tử của monoid tự do thành các phần tử của monoid pha màu](../03_monoid/balls_free_color_mixing.svg)

**Bài tập 14:** Viết các luật của monoid pha màu.

Nếu đội chiếc mũ lập trình viên, ta sẽ thấy rằng kiểu của monoid tự do trên tập hợp phần tử sinh T (có thể ký hiệu là `FreeMonoid<T>`) đẳng cấu với kiểu `List<T>`, và trực giác đằng sau tính chất đặc biệt vừa mô tả thực ra rất đơn giản: giữ các đối tượng trong một danh sách cho phép bạn chuyển chúng sang bất kỳ cấu trúc nào khác; nghĩa là khi muốn thực hiện một thao tác nào đó trên một loạt đối tượng nhưng chưa biết chính xác thao tác ấy là gì, ta chỉ cần giữ một danh sách các đối tượng đó cho đến lúc thực hiện nó.


<!--
{% if site.distribution == 'print' %}
-->

## Lời giải


---


**Bài tập 1:** Những phần tử đồng nhất của các monoid ấy là gì?

Với monoid các số tự nhiên đối với phép cộng, đó là số không: $n + 0 = n$ và $0 + n = n$.

Với monoid các số tự nhiên đối với *phép nhân* --- 1: $n × 1 = n$ và $1 × n = n$

---

**Bài tập 2:** Xem xét các phép toán khác trong toán học và kiểm tra rằng chúng tạo thành monoid.

Dưới đây là một vài monoid:

Tất cả các chuỗi (hữu hạn) đối với *phép nối chuỗi* (`+`), với chuỗi rỗng
làm phần tử đồng nhất:
- Tính kết hợp: `(a + b) + c === a + (b + c)`
- Đồng nhất: `s + "" === "" + s = s`

Tất cả các số tự nhiên đối với hàm *lấy giá trị lớn nhất*, với 0 làm phần tử đồng nhất:
 - Tính kết hợp: `max(max(a,b), c) === max(a, max(b,c))`
 - Đồng nhất: `max(a, 0) = a`

Tất cả các ma trận n×n đối với *phép nhân ma trận*, với ma trận đồng nhất
  - Tính kết hợp: $(AB)C = A(BC)$
  - Đồng nhất: $AI = IA = A$

---

**Bài tập 3:** Các số tự nhiên tạo thành một monoid đối với phép nhân, nhưng không tạo thành một nhóm. Hãy tìm hiểu vì sao.

Vì chúng không có *nghịch đảo*.

Các số quả thực có nghịch đảo đối với phép nhân, nhưng đó là các phân số, nên không phải số tự nhiên; chẳng hạn, nghịch đảo của 2 là 1/2.

Các số thực cũng không có nghịch đảo cho mọi số (số nào không có?).

---

**Bài tập 4:** Chứng minh rằng **AND** $∧$ có tính kết hợp bằng cách khai triển công thức $(A ∧ B) ∧ C = A ∧ (B ∧ C)$ với tất cả các giá trị có thể có.

Ta có thể chứng minh điều này bằng cách lập cái gọi là *bảng chân trị* (xem thêm thông tin trong chương tiếp theo).

| A | B | C | A ∧ B | (A ∧ B) ∧ C | B ∧ C | A ∧ (B ∧ C) |
|---|---|---|-------|-------------|-------|-------------|
| T | T | T | T     | T           | T     | T           |
| T | T | F | T     | F           | F     | F           |
| T | F | T | F     | F           | F     | F           |
| T | F | F | F     | F           | F     | F           |
| F | T | T | F     | F           | T     | F           |
| F | T | F | F     | F           | F     | F           |
| F | F | T | F     | F           | F     | F           |
| F | F | F | F     | F           | F     | F           |

---

**Bài tập 5:** Những phần tử đồng nhất của các phép toán AND và OR là gì?

Với phép toán **AND**, phần tử đồng nhất là $True$; với **OR**, đó là $False$.

---

**Bài tập 6:** Chứng minh rằng không có nhóm nào khác gồm 3 đối tượng ngoài $Z₃$.

Lấy một nhóm bất kỳ có 3 phần tử $\{e, a, b\}$, trong đó $e$ là phần tử đồng nhất.

Trong một nhóm như vậy, nhất thiết ta có

$$a \circ b = e$$

và

$$b \circ a = e$$

Vì sao? $a \circ b$ không thể bằng $a$, vì như thế $b$ sẽ là phần tử đồng nhất, $b = e$ (và nhóm thực ra sẽ là $\{e, a\}$); nó cũng không thể bằng $b$, vì như thế $a$ sẽ là phần tử đồng nhất.

Nói cách khác, $a$ và $b$ là nghịch đảo của nhau.

Do đó, ta cũng phải có

$$a \circ a = b$$

và

$$b \circ b = a$$

Vì sao? $a \circ a$ không thể bằng $e$, vì như thế có nghĩa là $a = e$. Và nó không thể bằng $a$, vì như thế có nghĩa là $a$ là nghịch đảo của chính nó, trong khi ta đã xác định nghịch đảo của nó là $b$. Tương tự với $b \circ b$.

Vậy ta đã xác định kết quả của việc áp dụng phép toán giữa bất kỳ phần tử nào của nhóm với bất kỳ phần tử nào khác, và có thể kết luận rằng nhóm của chúng ta đẳng cấu với $Z_3$.

Hơn nữa, ta đã làm điều ấy mà không giả định gì về nhóm ngoài việc nó có ba phần tử. Vậy mọi nhóm có ba phần tử đều đẳng cấu với $Z_3$ (như nhóm ví dụ của chúng ta).

---

**Bài tập 7:** Chứng minh rằng hai biểu diễn [của nhóm bốn Klein] đẳng cấu.

Đây là một bài tập hay về việc liên hệ trực giác không gian với tính toán.

Một hình chữ nhật không phải hình vuông có hai cách quay độc lập mà vẫn giữ được đối xứng -- ngang và dọc (hãy ký hiệu chúng là $H$ và $V$).

Với mỗi cách trong hai cách ấy, hình có thể ở một trong hai vị trí; hãy gọi chúng là "bình thường" và "đã lật". Hãy ký hiệu chúng là $0$ và $1$. Vậy ta có:

$$H = \{0, 1 \}$$

$$V = \{0, 1 \}$$

Vị trí của hình gồm hai thông tin: nó có bị lật theo chiều ngang hay không, và có bị lật theo chiều dọc hay không; tức là trạng thái của nó là tích Descartes của $H$ và $V$.

$$H \times V = \{ (0, 0), (0, 1), (1, 0), (1, 1) \}$$

Không khó thấy rằng nếu thêm phép toán nhóm tích tiêu chuẩn vào tập hợp tích này, ta sẽ thu được nhóm bốn Klein.

---

**Bài tập 8:** Chứng minh rằng nhóm [Dih₃] quả thực không giao hoán.

Chứng minh cần đưa ra một phản ví dụ, và điều này rất dễ: nếu $r$ là phép quay 120° và $f$ là phép đối xứng qua một trục thẳng đứng, ta có.
$$
f ∘ r ≠ r ∘ f
$$


---

**Bài tập 9:** Ngoài việc có hai hành động chính, yếu tố quyết định nào khiến nhóm này và bất kỳ nhóm nào khác không giao hoán?

Yếu tố quyết định là *các hành động không giao hoán*.
$$a ∘ b ≠ b ∘ a$$

Tức là các hành động phải phụ thuộc vào nhau theo một cách nào đó (một hành động thay đổi trạng thái của hành động kia); chẳng hạn, nếu ta lật một hình theo chiều ngang rồi quay nó, hình sẽ đi theo hướng khác so với khi chưa lật (trái với hình trong nhóm bốn Klein, nơi các phép đối xứng ngang và dọc độc lập với nhau).

---

**Bài tập 10:** Những phần tử đồng nhất của các nhóm hàm là gì?

Ở đây không có mẹo gì: phần tử đồng nhất là hàm đồng nhất.

---

**Bài tập 11:** Chứng minh rằng những hàm biểu diễn các phần tử nhóm nghịch đảo cũng là nghịch đảo của nhau.

Kết hợp một phần tử nhóm với nghịch đảo của nó sẽ cho ra phần tử đồng nhất:

$$1  + (-1) = 0$$

Phương trình này cũng đúng với các hàm tương ứng của chúng:

$$+1 ∘ -1 = +0$$

---

**Bài tập 12:** Viết phía còn lại của đẳng cấu [currying].

```typescript
// First part (given)
const curry = <A, B, C>(f: (a: A, b: B) => C) => 
  (a: A) => (b: B) => f(a, b)

// Second part (other direction)
const uncurry = <A, B, C>(f: (a: A) => (b: B) => C) => 
  (a: A, b: B) => f(a)(b)

// The isomorphism property:
// For all f: (a: A, b: B) => C, we have uncurry(curry(f)) = f
// For all g: (a: A) => (b: B) => C, we have curry(uncurry(g)) = g
```
---

**Bài tập 13:** Chỉ ra hai [cách phát biểu định lý Cayley] tương đương như thế nào.

Hai phát biểu đó là:
1. "Mọi nhóm đều đẳng cấu với nhóm hoán vị tương ứng của nó"
2. "Mọi nhóm đều đẳng cấu với các nhóm con của những nhóm đối xứng"

Chúng tương đương vì nhóm hoán vị là một nhóm con của một nhóm đối xứng:

1. Nhóm đối xứng có số phần tử cho trước là nhóm *tất cả* các hoán vị của số phần tử ấy.
2. Một nhóm hoán vị có số phần tử cho trước là một nhóm chứa *một số* hoán vị của số phần tử ấy.

Vậy ta có thể thu được bất kỳ nhóm hoán vị nào có cấp cho trước nếu loại đi một số phần tử khỏi nhóm đối xứng có cấp ấy. Chẳng hạn, 3 hoán vị tạo thành $Z_3$, nhóm các phép quay của một tam giác, có thể được tìm thấy trong 6 hoán vị tạo thành $S_3$, nhóm đối xứng cấp 3.

<!--
**Equivalence:**
- The "corresponding permutation group" in (1) is exactly the image of the group under the Cayley embedding
- This image is a subgroup of the symmetric group Sₙ where n is the group order
- Therefore, every group is isomorphic to a subgroup of some symmetric group
-->

---

**Bài tập 14:** Viết các luật của monoid pha màu.

Các phần tử sinh của chúng ta là các màu cơ bản --- $Red$, $Yellow$ và $Blue$

Và từ hình, ta biết rằng:

- $Blue ∘ Yellow = Green$

- $Yellow ∘ Red = Orange$   

- $Blue ∘ Yellow ∘ Red = Brown$   

v.v.

<!--
{%endif%}
-->

