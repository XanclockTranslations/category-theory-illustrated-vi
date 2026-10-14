---
layout: default
title: Phạm trù
---

# Từ tập hợp đến phạm trù

Trong chương này, chúng ta sẽ tìm hiểu thêm một số cấu trúc của lý thuyết tập hợp, đồng thời giới thiệu các cấu trúc tương ứng trong lý thuyết phạm trù, để từng bước làm quen với chính khái niệm phạm trù.

Sau đó, chúng ta sẽ thử (và gần như thành công) định nghĩa phạm trù từ đầu, mà không thực sự dựa vào lý thuyết tập hợp.

## Tích

Trong chương trước, chúng ta cần một cách xây dựng tập hợp có các phần tử _được kết hợp_ từ các phần tử của một số tập hợp khác. Chẳng hạn, khi bàn về các hàm toán học, chúng ta không thể định nghĩa $+$ và $-$ vì chỉ có thể mô tả các hàm nhận một đối số. Tương tự, khi giới thiệu các kiểu nguyên thuỷ trong ngôn ngữ lập trình, như `Char` và `Number`, chúng ta đã nói rằng phần lớn các kiểu thực sự được sử dụng là kiểu _phức hợp_. Vậy chúng ta xây dựng chúng như thế nào?

Hãy xét một tập hợp $A$ (chứa các $a$) và một tập hợp $B$ (chứa các $B$) 

![Các thành phần của tích](../02_category/product_parts.svg)

Chúng ta đưa vào một tập hợp mới kết hợp hai tập hợp này thành một: tập hợp tích của chúng.

![Tích](../02_category/product.svg)
 
{: .definition}

> _Tích Descartes_ (hay _bộ_) của các tập hợp $A$ và $B$ (ký hiệu $A \times B$) là tập hợp các _cặp có thứ tự_ chứa một phần tử của tập hợp $A$ và một phần tử của tập hợp $B$. Hay nói một cách hình thức: $A \times B = \{ (a, b) \}$ trong đó $a ∈ A, b ∈ B$ ($∈$ có nghĩa là "là một phần tử của").


**Bài tập 1**: Vì sao cấu trúc này được gọi là tích? Gợi ý: Nó có bao nhiêu phần tử?

Đương nhiên, tích đi kèm với hai hàm, mỗi hàm ứng với một thuộc tính, cho phép bạn lấy một cặp rồi trích ra giá trị của thuộc tính đó, 


![Tích](../02_category/product_functions.svg)

{: .theorem}

Với mỗi tập hợp $C$ là tích của $A$ và $B$, có hai hàm $C \to A$ và $C \to B$, được gọi là các *phép chiếu* của tích, dùng để lấy lại các giá trị thành phần của nó (của tích).

(trong ngôn ngữ lập trình, chúng ta sẽ gọi chúng là các "getter")

### Tích ba

Có những lúc chúng ta muốn kết hợp ba tập hợp, thay vì hai, thành một tích (chẳng hạn $A \times B \times C$). Nhưng chúng ta không cần định nghĩa riêng khái niệm tích ba: có thể làm điều này bằng cách kết hợp tập hợp thứ nhất và thứ hai thành một tích, rồi kết hợp tích của chúng với tập hợp thứ ba (khi đó ta có $(A \times B) \times C$).

![Tích ba](../02_category/triple_product.svg)

Có một cách khác để tạo tích ba của ba tập hợp --- kết hợp tập hợp thứ hai và thứ ba, rồi kết hợp kết quả với tập hợp thứ nhất (tức là $A \times (B \times C)$), nhưng thực ra dùng cách nào cũng không quan trọng --- nếu xem các tập hợp đẳng cấu là bằng nhau, các kết quả cuối cùng sẽ như nhau, tức là 

{: .theorem}

> Hai cách kết hợp ba tập hợp thành một tích ba là đẳng cấu, $(A \times B) \times C \cong A \times (B \times C)$.

![Tích ba](../02_category/triple_product_associativity.svg)

Bạn có thể nhận ra sơ đồ này từ phần về phép hợp thành hàm. Nó có nghĩa là phép toán tích Descartes (giống như phép hợp thành hàm) có tính *kết hợp*.

<!--
{% if site.distribution == 'print'%}
-->

### Phần xen kẽ --- hệ toạ độ

Khái niệm _tích Descartes_ được nhà toán học và triết gia René Descartes định nghĩa đầu tiên, làm cơ sở cho _hệ toạ độ Descartes_, nên cả hai khái niệm đều được đặt theo tên ông (dù tên gọi có vẻ không giống, vì chúng dùng dạng Latinh hoá của tên ông).

Phần lớn mọi người đều biết hệ toạ độ Descartes hoạt động như thế nào, nhưng một câu hỏi cũng thú vị không kém, mà ít người nghĩ đến, là chúng ta có thể định nghĩa nó bằng các tập hợp và hàm như thế nào.

Hệ toạ độ Descartes gồm hai đường thẳng vuông góc nằm trên một _mặt phẳng Euclid_, cùng một loại ánh xạ giống hàm, gắn mỗi điểm trên hai đường thẳng này với một số biểu thị khoảng cách từ điểm được ánh xạ đến giao điểm của hai đường thẳng (được ánh xạ đến số $0$).

![Toạ độ Descartes](../02_category/coordinates_x_y.svg)

Bằng cấu trúc này (cùng với khái niệm tích Descartes), chúng ta có thể mô tả không chỉ các điểm trên hai đường thẳng mà cả mọi điểm trên mặt phẳng Euclid. Chúng ta làm điều đó bằng cách đo khoảng cách từ điểm đến hai đường thẳng này.

![Toạ độ Descartes](../02_category/coordinates.svg)

Và vì điểm là khái niệm nguyên thuỷ chủ yếu của hình học Euclid, hệ toạ độ cũng cho phép chúng ta mô tả mọi loại hình hình học, chẳng hạn tam giác này (được mô tả bằng các tích của tích).

![Toạ độ Descartes](../02_category/coordinates_triangle.svg)

Vậy chúng ta có thể nói rằng hệ toạ độ Descartes là một loại ánh xạ giống hàm giữa các tập hợp _tích của các số_ và các _hình hình học_ tương ứng với những số này; qua ánh xạ đó, chúng ta có thể suy ra một số tính chất của các hình từ những số ấy (chẳng hạn, dùng các tích trong ví dụ dưới đây, chúng ta có thể tính được rằng tam giác mà chúng biểu thị có đáy dài $6$ đơn vị và chiều cao $5$ đơn vị).

![Toạ độ Descartes](../02_category/coordinates_isomorphism.svg)

Điều thú vị hơn nữa là ánh xạ này là một-một, khiến hai thế giới ấy _đẳng cấu_ (theo cách nói truyền thống, điểm được các toạ độ mô tả _hoàn toàn_, cũng chính là điều đó).

Như vậy, việc biểu diễn toạ độ Descartes bằng tập hợp của chúng ta đã hoàn tất, ngoại trừ việc chúng ta chưa mô tả ánh xạ nối các điểm với các số. Ánh xạ này giống một hàm và thể hiện mọi tính chất liên quan của hàm (ánh xạ nhiều-một, hay một-một trong trường hợp này). Tuy nhiên, như đã nói, hàm là ánh xạ giữa các _tập hợp_; trong trường hợp này, ngay cả khi có thể coi hệ toạ độ là một tập hợp (gồm các điểm và hình), thì các hình hình học chắc chắn không phải là một tập hợp, vì còn nhiều thứ khác đi kèm với chúng (hay _cấu trúc_ bổ sung, theo cách nói của một nhà lý thuyết phạm trù). Vì thế, để định nghĩa ánh xạ này một cách hình thức, chúng ta còn phải hình thức hoá cả hình học lẫn đại số, hơn nữa phải làm điều đó theo cách khiến chúng tương thích với nhau. Đây là một vài tham vọng của lý thuyết phạm trù, và cũng là điều chúng ta sẽ thử làm ở phần sau của cuốn sách.

Nhưng trước khi tiếp tục, hãy xem một số ứng dụng thú vị khác của tích.

<!--
{%endif%}
-->

### Tích như các đối tượng

Trong chương trước, chúng ta đã thiết lập sự tương ứng giữa nhiều khái niệm trong ngôn ngữ lập trình và lý thuyết tập hợp --- tập hợp giống kiểu, còn hàm giống phương thức/chương trình con. Bức tranh này trở nên hoàn chỉnh với tích, giống như các _lớp_ giản lược (còn gọi là _bản ghi_ hay _struct_) --- các tập hợp tạo nên tích tương ứng với các _thuộc tính_ của lớp (còn gọi là _thành viên_), và các hàm truy cập chúng giống thứ mà lập trình viên gọi là _phương thức getter_. Chẳng hạn, ví dụ nổi tiếng trong lập trình hướng đối tượng về lớp `Person` với các trường `name` và `age` chẳng qua là tích của tập hợp các chuỗi và tập hợp các số. Và như đã chỉ ra, các đối tượng có hơn hai giá trị có thể được biểu diễn bằng cách hợp thành những tích lồng nhau.

### Dùng tích để định nghĩa các phép toán số học

Tích cũng có thể được dùng để biểu diễn các hàm nhận nhiều hơn một đối số (và đây thực sự là cách triển khai hàm có nhiều tham số trong một số ngôn ngữ, chẳng hạn các ngôn ngữ thuộc họ ML). Ví dụ, "cộng" là một hàm từ tập hợp các tích của hai số đến tập hợp các số, tức là $+: \mathbb{Z} \times \mathbb{Z} → \mathbb{Z}$.

![Hàm cộng](../02_category/plus.svg)

Nhân tiện, những hàm như vậy (nhận hai đối tượng thuộc một kiểu và trả về một đối tượng thứ ba cùng kiểu) được gọi là _phép toán_.

### Định nghĩa tích bằng tập hợp---định nghĩa bên trong

Như đã nói, tích là một tập hợp các cặp _có thứ tự_ (nói một cách hình thức, $A \times B ≠ B \times A$). Vì vậy, để định nghĩa tích, chúng ta phải định nghĩa khái niệm cặp có thứ tự. Làm thế nào để làm điều đó?

![Một cặp có thứ tự gồm hai phần tử](../02_category/pair.svg)

Lưu ý rằng một cặp có thứ tự gồm các phần tử không chỉ là một tập hợp chứa hai phần tử ấy (đó sẽ là một _cặp không có thứ tự_) 

![Một cặp không có thứ tự gồm hai phần tử: chỉ là một tập hợp chứa hai phần tử](../02_category/unordered_pair.svg)

mà còn chứa thông tin về đối tượng nào đứng trước và đối tượng nào đứng sau trong cặp---một số phép toán (như phép cộng) không quan tâm đến thứ tự, còn những phép toán khác (như phép trừ) thì có. Trong lập trình, chúng ta có thể đặt tên cho từng thuộc tính của một đối tượng, cũng nhằm mục đích đó---cho phép chúng ta truy cập một thuộc tính cụ thể của đối tượng, thay vì một thuộc tính ngẫu nhiên bất kỳ.

Vậy nếu cặp có thứ tự không phải là một tập hợp, điều đó có nghĩa là muốn dùng nó, chúng ta phải định nghĩa nó như một kiểu "nguyên thuỷ", giống cách đã định nghĩa tập hợp sao? Có thể làm như vậy, nhưng còn một cách khác. Chúng ta có thể định nghĩa một cấu trúc _đẳng cấu_ với cặp có thứ tự mà chỉ dùng tập hợp. Các nhà toán học đã nghĩ ra nhiều cách khéo léo để làm điều này. Đây là cách đầu tiên, do Norbert Wiener đề xuất năm 1914. Hãy lưu ý cách tận dụng tài tình sự kiện rằng tập hợp rỗng là duy nhất.

![Một cặp được biểu diễn bằng các tập hợp](../02_category/pair_as_set_2.svg)

Cách tiếp theo được Felix Hausdorff đề xuất trong cùng năm. Để dùng cách này, chúng ta chỉ cần định nghĩa $1$ và $2$ trước.

![Một cặp được biểu diễn bằng các tập hợp](../02_category/pair_as_set_3.svg)

Được Kazimierz Kuratowski đề xuất năm 1921, cách này chỉ dùng các thành phần của cặp.

![Một cặp được biểu diễn bằng các tập hợp](../02_category/pair_as_set_1.svg)

Tất cả những định nghĩa này đều hoạt động bằng cách _phóng to_ từng phần tử của tích. Chúng ta có thể coi đây là cách tiếp cận định nghĩa ở _mức thấp_, tập trung vào cấu trúc _bên trong_ của tích. Nhưng điều thú vị hơn, ít nhất đối với lý thuyết phạm trù, là cách tiếp cận ở _mức cao_ --- thay vì phóng to, chúng ta _thu nhỏ_, hoàn toàn không quan tâm đến nội dung của các tập hợp và chỉ tập trung vào những hàm gắn với tích.

### Định nghĩa tích bằng hàm---định nghĩa bên ngoài

Bây giờ, chúng ta sẽ xem một định nghĩa tập hợp tích theo lý thuyết phạm trù. Chúng ta gọi định nghĩa này là _bên ngoài_ vì nó không dựa vào cấu trúc bên trong của đối tượng, mà dựa vào hành vi bên ngoài của nó (được xác định bởi các hàm đi từ nó và đến nó). Và vì nó có quan hệ chặt chẽ với các sơ đồ bên ngoài.

Những định nghĩa như vậy được dẫn dắt bởi một mô hình khái niệm về đối tượng muốn định nghĩa. Chẳng hạn, chúng ta có thể thống nhất rằng tích của $A$ và $B$ là một kiểu kết hợp chứa $A$ và $B$ (và không có gì hơn).

Bây giờ, dựa vào mô hình khái niệm ấy, khi cho trước hai tập hợp, chúng ta phải tìm cách xác định chính xác tập hợp nào là tích của chúng bằng cách xem các hàm đi từ/đến chúng. 

Chúng ta đã nói rằng tích của $A$ và $B$ chứa một $A$ và một $B$. Vậy những hàm nào có thể đáp ứng các tiêu chí này? Dĩ nhiên, đó là các phép chiếu, tức các hàm lấy lại hai phần tử: $A \times B \to A$ và $A \times B \to B$. 

![Tích](../02_category/product_functions.svg)

Bây giờ, nếu chuyển sang góc nhìn (bán) bên ngoài, sơ đồ này đã cung cấp phần nào một định nghĩa về tích:

![Tích, sơ đồ bên ngoài](../02_category/product_external.svg)

{: .definition}

> Tích của $A$ và $B$, ký hiệu $A \times B$, là một tập hợp sao cho:
> 1. Tồn tại hai hàm "chiếu" $A \times B \to A$ và $A \times B \to B$...

Nói cách khác, nếu có một tập hợp $C$ mà đối với nó tồn tại các hàm $C \to A$ và $A \times B \to B$, thì $C$ có khả năng bằng $A \times B$.


Tuy nhiên, định nghĩa này chưa đầy đủ, vì tích của $A$ và $B$ không phải là tập hợp *duy nhất* có thể định nghĩa những hàm như vậy. Ví dụ, tập hợp các bộ ba mà chúng ta đã xét (hay tích ba) $A \times B \times X$ với một phần tử $X$ bất kỳ cũng thoả mãn điều kiện. Bất kỳ tập hợp nào khác tình cờ có các hàm đến $A$ và $B$, theo định nghĩa này, cũng sẽ là một "tích giả mạo".

![Tích, sơ đồ bên ngoài](../02_category/product_candidates.svg)

Để vạch mặt những kẻ giả mạo này, chúng ta quay lại định nghĩa khái niệm. Hãy nhớ rằng chúng ta đã nói $A \times B$ chứa một phần tử của $A$, một phần tử của $B$ _và không có gì hơn_. Điều này cho biết mỗi kẻ giả mạo $I$ đều có thể được *chuyển đổi* thành $A \times B$, tức là có một mũi tên $I \to A \times B$ . Vì sao? Như đã nói, tất cả những tập hợp này đều _phức tạp hơn_ tích. Và luôn có thể có một hàm chuyển một cấu trúc phức tạp hơn thành cấu trúc đơn giản hơn bằng cách bỏ bớt thông tin.

![Tích, sơ đồ bên ngoài](../02_category/product_morphisms.svg)

Chúng ta có thể biết rằng mũi tên này tồn tại với mọi tích, vì với bất kỳ phần tử nào của tập hợp giả mạo $I$, chứa một phần tử của $A$, một phần tử của $B$ _và một thứ gì đó nữa_, đều tồn tại một phần tử của tập hợp $A \times B$ chứa cùng phần tử ấy của $A$ và cùng phần tử ấy của $B$ (và không có gì hơn). Vì vậy, chúng ta có thể định nghĩa một hàm $I \to A \times B$ bỏ đi thông tin bổ sung đó. 


Điều thú vị hơn nữa là các hàm chiếu (để lấy lại các phần tử) $I \to A$ và $I \to B$, những hàm khiến $I$ là một kẻ giả mạo, có thể được định nghĩa bằng hàm $I \to A \times B$ này.

Lấy ví dụ tập hợp các bộ ba $A \times B \times X$ với $X$ bất kỳ. Hàm chính tắc chuyển nó thành một tích $A \times B \times X \to A \times B$ là hàm chỉ việc loại bỏ phần tử thứ ba $X$. 

![Tích ba, sơ đồ bên trong](../02_category/product_triple_internal.svg)

Và chúng ta thấy có thể dễ dàng định nghĩa các phép chiếu bằng hàm này. 

![Tích ba, sơ đồ bên trong](../02_category/product_triple_internal_diagram.svg)

Nghĩa là, nếu gọi hàm này là $g: A \times B \times X \to A \times B$ và gọi $f^{1}$ cùng $f^{2}$ là các phép chiếu của tích ($f^{1} : A \times B \to A$ và $f^{2} : A \times B \to B$), thì các mũi tên nối bộ ba $A \times B \times X$ với $A$ và $B$ chỉ là các hợp thành $f^{1}\circ g$ và $f^{2} \circ g$. Gần như thể $A \times B \times X$ *chỉ được nối với $A$ và $B$ nhờ hàm này*.

![Tích ba, sơ đồ bên ngoài](../02_category/product_triple.svg)

Một cách hình thức hơn, chúng ta có thể định nghĩa tích như sau.

{: .definition}

> Tích của $A$ và $B$, ký hiệu $A \times B$, là một tập hợp sao cho:
> 1. Tồn tại hai hàm "chiếu" $f^{1}: A \times B \to A$ và $f^{2}: A \times B \to B$.
> 2. Với bất kỳ tích giả mạo $I$ nào cũng có những hàm chiếu như vậy ($I \to A$ và $I \to B$), phải tồn tại một hàm duy nhất (gọi là cấu xạ phổ dụng) với chữ ký kiểu $g: I \to A \times B$, chuyển tích giả mạo thành tích thật, sao cho các phép chiếu của kẻ giả mạo chỉ là hợp thành của $g$ với các phép chiếu của tích, tức là 
$f^{1}\circ g: I \to A $ và $f^{2} \circ g: I \to B$. 

Chúng ta chứng minh một tập hợp cho trước là một tích bằng cách đưa ra công thức cho hàm $g$ thoả mãn các tiêu chí của mình. Với các hàm $g^{1}: I \to A$ và $g^{2}: I \to B$ cho trước, hàm $g$ chỉ là hàm tạo một cặp từ kết quả của hai hàm ấy; vì vậy, nếu $i$ là một phần tử của $I$, thì $g = (i) \to (g^{1}(i), g^{2}(i))$.

Vậy hàm $g$ tồn tại với mọi đối tượng $I$. 

{: .definition}

> Tích của $A$ và $B$, ký hiệu $A \times B$, được định nghĩa sao cho tất cả các đường đi trong sơ đồ này tương đương, với mọi đối tượng $I$ được nối với $A \times B$.
> ![Tích, tính chất phổ dụng](../02_category/product_universal_property.svg)

Bạn sẽ gặp nhiều định nghĩa và sơ đồ tương tự trong cuốn sách này. Trong lý thuyết phạm trù, chúng ta thường (luôn luôn) định nghĩa các tính chất mà một đối tượng có thể có bằng cách định nghĩa một cấu trúc sao cho mọi đối tượng tương tự đều có thể được chuyển đổi thành nó. Đây là điều chúng ta gọi là một *tính chất phổ dụng*, nhưng vẫn còn quá sớm để đi sâu hơn (dù sao, chúng ta thậm chí còn chưa nói lý thuyết phạm trù là gì).

### Đẳng cấu và sự bằng nhau

Nếu nhớ lại ba định nghĩa tích bằng tập hợp và cấu trúc tập hợp đã gặp trước đó, rồi thử xác định định nghĩa nào là tích "thật", được định nghĩa bởi tính chất phổ dụng, chúng ta sẽ thấy rằng *tất cả* đều là tích thật. Đó là vì tất cả chúng đều đẳng cấu với nhau. Điều này không có vấn đề gì: khi biểu diễn các thứ bằng tính chất phổ dụng, đẳng cấu được coi là sự bằng nhau. 

{: .theorem}

> Nếu một tập hợp $C$ thoả mãn một tính chất phổ dụng cho trước (chẳng hạn là tích của $A$ và $B$), thì bất kỳ tập hợp nào đẳng cấu với $C'$ cũng thoả mãn tính chất ấy.

(Điều này đúng vì bạn có thể dễ dàng dựng cấu xạ phổ dụng từ $C'$ bằng cấu xạ phổ dụng của $C$).

Chúng ta nói rằng tích của hai tập hợp là "duy nhất sai khác *một đẳng cấu*". Đây là cách nói ngắn gọn của "thực ra có nhiều hơn một, nhưng tất cả đều đẳng cấu với nhau, nên chúng ta không bận tâm".

<!--TODO diagram-->

Đây cũng là quan điểm chúng ta thường dùng trong lập trình, nhất là khi làm việc ở mức cao: dù có thể có nhiều cách triển khai khác nhau cho một danh sách hay một cặp, hoặc nhiều định dạng khác nhau để lưu một dữ liệu cho trước, miễn là có cách chuyển đổi từ cách này sang cách kia (và ngược lại), thì với chúng ta, tất cả đều như nhau.

<!--

TODO 

Addendum: Testing the definition
---

In the previous section, we proved that the  definition of products in terms of functions works, but, as Donald Knuth once implied, proving something doesn't beat testing it. So

-->

## Tổng

Bây giờ, chúng ta sẽ nghiên cứu một cấu trúc khá giống tích nhưng đồng thời cũng rất khác. Giống vì, như tích, nó là một quan hệ giữa hai tập hợp cho phép bạn hợp nhất chúng thành một mà không xoá bỏ cấu trúc của chúng. Nhưng khác vì nó mã hoá một loại quan hệ rất khác --- tích mã hoá quan hệ _và_ giữa hai tập hợp, còn tổng mã hoá quan hệ _hoặc_.

![Tổng hay đối tích](../02_category/coproduct.svg)

{: .definition} 

> Tổng của hai tập hợp $A$ và $B$, ký hiệu $A + B$, là một tập hợp chứa tất cả các phần tử của $A$ kết hợp với tất cả các phần tử của $B$.

### Định nghĩa tổng bằng tập hợp---định nghĩa bên trong

Cũng như với tích, việc biểu diễn tổng bằng tập hợp không đơn giản đến vậy. Chẳng hạn, khi một đối tượng là phần tử của cả hai tập hợp, nó sẽ xuất hiện hai lần trong tổng, điều này không được phép, vì một tập hợp không thể chứa cùng một phần tử hai lần.

Và cũng như với tích, có một cách ở mức thấp để biểu diễn tổng chỉ bằng tập hợp. Tình cờ là chúng ta có thể dùng các cặp.

![Xem xét một phần tử của đối tích](../02_category/coproduct_member_set.svg)

### Định nghĩa tổng bằng hàm---định nghĩa bên ngoài

Có lẽ bạn đã đoán được rằng phần thú vị là biểu diễn tổng của hai tập hợp bằng hàm. Để làm điều đó, chúng ta phải quay lại phần khái niệm của định nghĩa. Chúng ta đã nói rằng tổng biểu diễn quan hệ _hoặc_ giữa hai thứ.

Một tính chất của mọi quan hệ _hoặc_ là nếu một thứ là $A$, thì thứ đó cũng là $A \vee B$ (nhân tiện, ký hiệu $\vee$ có nghĩa là _hoặc_). Ví dụ, nếu tóc tôi _nâu_, thì tóc tôi cũng _hoặc vàng hoặc nâu_. Đó là ý nghĩa của _hoặc_, đúng không? Tính chất này có thể được biểu diễn bằng một hàm, thực ra là hai hàm --- mỗi hàm ứng với một tập hợp tham gia vào quan hệ tổng (chẳng hạn, nếu cha mẹ là mẹ hoặc cha, thì chắc chắn tồn tại các hàm $mothers → parents$ và $fathers → parents$).

![Đối tích, sơ đồ bên ngoài](../02_category/coproduct_external.svg)

Có lẽ bạn đã nhận thấy định nghĩa này khá giống định nghĩa tích ở phần trước --- điểm khác biệt là các mũi tên đảo chiều. Và sự tương đồng không dừng lại ở đây. Cũng như với tích, chúng ta có các tập hợp có thể coi là tổng _giả mạo_ --- những tập hợp có các hàm này nhưng cũng chứa thông tin bổ sung.

![Đối tích, sơ đồ bên ngoài](../02_category/coproduct_candidates.svg)

Tất cả những tập hợp này biểu diễn các quan hệ mơ hồ hơn tổng đơn giản, nên với một tập hợp như vậy, sẽ tồn tại một hàm duy nhất phân biệt nó với tổng thật. Điểm khác biệt duy nhất là, khác với các hàm định nghĩa tích, lần này hàm đi _từ tổng_ đến kẻ giả mạo.

![Đối tích, sơ đồ bên ngoài](../02_category/coproduct_morphisms.svg)

Đây là định nghĩa:

{: .definition}

> Tổng của $A$ và $B$, ký hiệu $A + B$, là một tập hợp sao cho: 
1. Tồn tại hai hàm "chiếu" $A \to A + B$ và $B \to A + B$. 
2. Với bất kỳ tổng giả mạo $I$ nào cũng có những hàm chiếu như vậy ($A \to I$ và $B \to I$), phải tồn tại một hàm duy nhất với chữ ký kiểu $g: A + B \to I$, chuyển tổng thật thành tổng giả mạo, sao cho các phép chiếu của tổng giả mạo chỉ là hợp thành của $g$ với các phép chiếu.


## Phần xen kẽ: Đối ngẫu phạm trù

Các khái niệm tích và tổng có thể đã có vẻ giống nhau ở một khía cạnh nào đó khi nhìn qua các sơ đồ bên trong. Góc nhìn _bên ngoài_ làm sự tương đồng này trở nên chính xác --- hai sơ đồ này là cùng một sơ đồ, chỉ có các mũi tên bị đảo chiều --- quan hệ nhiều-một trở thành một-nhiều và ngược lại.

![Đối tích và tích](../02_category/coproduct_product_duality.svg)

Các tính chất phổ dụng định nghĩa hai cấu trúc cũng giống nhau --- nếu có một tổng $A + B$, thì với mỗi tổng giả mạo, chẳng hạn $A + B + X$, tồn tại một hàm tầm thường $A + B  \to A + B + R$.

Và nếu bạn còn nhớ, với tích, các mũi tên đi theo chiều ngược lại --- ví dụ tương ứng cho tích sẽ là hàm $A \times B \times R \to A \times B $

Sự kiện này hé lộ một mối liên hệ sâu sắc giữa các khái niệm _tích_ và _tổng_, vốn không hiển nhiên theo những cách nhìn khác --- chúng là những khái niệm ngược nhau. _Tích_ là khái niệm ngược của _tổng_, và _tổng_ là khái niệm ngược của _tích_.

Trong lý thuyết phạm trù, các khái niệm có quan hệ như vậy được gọi là _đối ngẫu_ với nhau. Vậy các khái niệm _tích_ và _tổng_ là đối ngẫu. Vì thế, trong ngữ cảnh lý thuyết phạm trù, tổng được gọi là _tích đảo_, hay ngắn gọn là _đối tích_. Quy ước đặt tên này được dùng cho tất cả các cấu trúc đối ngẫu trong lý thuyết phạm trù.

<!--
{% if site.distribution == 'print'%}
-->

### Đối ngẫu De Morgan

Bây giờ, hãy nhìn các khái niệm tích và tổng từ góc độ _lôgic_. Chúng ta đã nói rằng:

- _Tích_ của hai tập hợp chứa một phần tử của tập hợp thứ nhất _và_ một phần tử của tập hợp thứ hai.
- _Tổng_ của hai tập hợp chứa một phần tử của tập hợp thứ nhất _hoặc_ một phần tử của tập hợp thứ hai.

Khi xem các tập hợp ấy như những mệnh đề, chúng ta nhận thấy khái niệm _tích_ ($\times$) tương ứng chính xác với quan hệ _và_ trong lôgic (ký hiệu $\land$). Từ góc nhìn này, hàm $Y \times B \to Y$ có thể được xem là một trường hợp của quy tắc suy luận lôgic gọi là _loại bỏ phép hội_ (còn gọi là _đơn giản hoá_), phát biểu rằng $Y  \land B \to Y$; chẳng hạn, nếu tóc bạn có phần vàng và có phần nâu, thì tóc bạn có phần vàng.

Tương tự, khái niệm _tổng_ ($+$) tương ứng với quan hệ _hoặc_ trong lôgic (ký hiệu $\lor$). Từ góc nhìn này, hàm $Y  \to Y + B$ có thể được xem là một trường hợp của quy tắc suy luận lôgic gọi là _đưa vào phép tuyển_, phát biểu rằng $Y  \to Y \lor B$; chẳng hạn, nếu tóc bạn vàng, thì tóc bạn hoặc vàng hoặc nâu.

Điều này, cùng với những điều khác, có nghĩa là các khái niệm _và_ và _hoặc_ cũng đối ngẫu --- một ý tưởng được nhà toán học Augustus De Morgan đưa ra vào thế kỷ 19, và từ đó được gọi là _đối ngẫu De Morgan_. Đây là tiền thân của ý tưởng đối ngẫu hiện đại trong lý thuyết phạm trù mà chúng ta vừa tìm hiểu.

![Đối tích và tích](../02_category/demorgan_duality.svg)

Tính đối ngẫu của $\land$ và $\lor$ có thể được thấy trong hai công thức thường gắn với tên De Morgan nhất, được gọi là các định luật De Morgan (dù thực ra De Morgan không khám phá ra chúng: trước đó, chúng đã được William of Ockham (người nổi tiếng với "dao cạo Ockham"), cùng những người khác, phát biểu).

$\neg(A \wedge B) = \neg{A} \vee \neg{B}$

$\neg(A \vee B) = \neg{A} \wedge \neg{B}$

Chẳng hạn, bạn có thể đọc công thức thứ hai như sau: nếu tóc tôi không phải vàng _hoặc_ nâu, thì điều đó có nghĩa là tóc tôi không vàng _và_ tóc tôi không nâu, và ngược lại (mối liên hệ đúng theo cả hai chiều).

Bây giờ, chúng ta sẽ xem xét các công thức và thử chỉ ra rằng chúng thực ra là một hệ quả đơn giản của tính đối ngẫu giữa _và_ và _hoặc_.

Giả sử chúng ta muốn tìm phát biểu ngược với "vàng _hoặc_ nâu".

$A \vee B$

Điều đầu tiên chúng ta muốn làm là thay các phát biểu thành phần bằng phát biểu ngược của chúng, tạo thành phát biểu "không vàng _hoặc_ không nâu".

$\neg{A} \vee \neg{B}$

Tuy nhiên, phát biểu này rõ ràng không phải là phát biểu ngược với "vàng _hoặc_ nâu" (nói tóc tôi không vàng _hoặc_ không nâu thực ra vẫn cho phép tóc vàng và cũng cho phép tóc nâu; nó chỉ không cho phép tóc có cả hai màu ấy).

Vậy chúng ta đã bỏ sót điều gì? Đơn giản thôi: chúng ta đã thay các mệnh đề bằng mệnh đề ngược của chúng, nhưng chưa thay _toán tử_ nối chúng --- với cả hai mệnh đề, nó vẫn là _hoặc_. Vì vậy, chúng ta phải thay nó bằng toán tử ngược của _hoặc_. Như đã nói trước đó, và như bạn có thể thấy khi phân tích ví dụ này, toán tử ấy là _và_. Vậy công thức trở thành "không vàng _và_ không nâu".

$\neg{A} \wedge \neg{B}$

Nói rằng công thức này là phát biểu ngược với "vàng và nâu" --- cũng chính là nói rằng nó tương đương với phủ định của phát biểu ấy, đúng như định luật De Morgan thứ hai phát biểu.

$\neg(A \vee B) = \neg{A} \wedge \neg{B}$

Và nếu "lật ngược" toàn bộ công thức này (chúng ta có thể làm điều đó mà không đổi dấu của từng mệnh đề, vì nó đúng với mọi mệnh đề), chúng ta thu được định luật thứ nhất.

$\neg(A \wedge B) = \neg{A} \vee \neg{B}$

Điều này có lẽ gợi ra nhiều câu hỏi, và chúng ta có cả một chương về lôgic để giải đáp chúng. Nhưng trước khi đến đó, chúng ta phải tìm hiểu phạm trù (và tập hợp) là gì.

<!--
{%endif%}
-->

## Định nghĩa phần còn lại của lý thuyết tập hợp ~~từ bên ngoài~~ theo ngôn ngữ phạm trù

Đến lúc này, chúng ta đã thấy trong sách một số cách đáng kinh ngạc để định nghĩa các cấu trúc của lý thuyết tập hợp mà không nhìn vào các phần tử của tập hợp, chỉ dùng các sơ đồ bên ngoài.

Trong chương đầu tiên, chúng ta đã định nghĩa hàm và phép hợp thành hàm bằng sơ đồ này.

![Phép hợp thành hàm](../02_category/functions_compose_sets.svg)

Và giờ đây, chúng ta cũng đã định nghĩa tích và tổng.

![Đối tích và tích](../02_category/coproduct_product_duality.svg)

Điều đáng kinh ngạc hơn nữa là chúng ta có thể định nghĩa _toàn bộ lý thuyết tập hợp_ chỉ dựa vào khái niệm hàm, như nhà tiên phong của lý thuyết phạm trù Francis William Lawvere đã khám phá.

### Định nghĩa phần tử tập hợp từ bên ngoài

Theo truyền thống, mọi thứ trong lý thuyết tập hợp đều được định nghĩa bằng hai thứ: _tập hợp_ và _phần tử_. Vì thế, nếu muốn định nghĩa lý thuyết ấy bằng _tập hợp_ và _hàm_, chúng ta phải định nghĩa khái niệm _phần tử tập hợp_ bằng hàm.

Để làm điều đó, chúng ta sẽ dùng tập hợp đơn phần tử.

![Tập hợp đơn phần tử](../02_category/elements_singleton.svg)

Được rồi, hãy bắt đầu bằng việc lấy một tập hợp bất kỳ mà chúng ta muốn mô tả.

![Một tập hợp có ba phần tử](../02_category/elements_set.svg)

Và hãy xem xét các hàm từ tập hợp đơn phần tử đến tập hợp bất kỳ ấy.

![Các hàm từ tập hợp đơn phần tử](../02_category/elements_singleton_functions.svg)

Dễ thấy rằng sẽ có đúng một hàm ứng với mỗi phần tử của tập hợp. Vì vậy, chúng ta có thể nói:

{: .theorem}

> Mỗi phần tử của một tập hợp $X$ đẳng cấu với một hàm $$1 \to X$$ (trong đó $$1$$ là tập hợp đơn phần tử).

Vậy chúng ta có thể nói rằng những gì được gọi là "phần tử" của một tập hợp chính là các hàm từ tập hợp đơn phần tử đến nó.

Như vậy, tập hợp trong ví dụ của chúng ta sẽ có dạng như sau.

![Các hàm từ tập hợp đơn phần tử](../02_category/elements_singleton_functions_partly_external.svg)

Tuy nhiên, sơ đồ của chúng ta vẫn chưa hoàn toàn là sơ đồ bên ngoài, vì nó phụ thuộc vào ý tưởng về tập hợp đơn phần tử, tức tập hợp có một _phần tử_. Hơn nữa, điều này khiến toàn bộ định nghĩa trở nên vòng quanh, vì chúng ta không thể định nghĩa khái niệm tập hợp một phần tử mà không có khái niệm phần tử.

### Định nghĩa tập hợp đơn phần tử từ bên ngoài

Chúng ta định nghĩa tập hợp đơn phần tử từ bên ngoài giống như đã định nghĩa tích và tổng - bằng một tính chất riêng có của tập hợp đơn phần tử. Cụ thể, trong chương trước, chúng ta đã biết điều sau:

{: .theorem}

> Có một hàm duy nhất từ bất kỳ tập hợp nào đến bất kỳ tập hợp đơn phần tử nào.

Nếu $1$ là tập hợp đơn phần tử, thì chúng ta có đúng một hàm $X \to 1$ với mọi đối tượng $$X$$, tức là $\forall  X  \exists!  (X \to 1)$ (trong đó $\exists!$ có nghĩa là "tồn tại duy nhất").

![Đối tượng cuối](../02_category/terminal_object_internal.svg)

Hoá ra tính chất này xác định duy nhất tập hợp đơn phần tử, tức là không có tập hợp nào khác có tính chất ấy, ngoài những tập hợp đẳng cấu với tập hợp đơn phần tử. Lý do đơn giản là, nếu có hai tập hợp cùng có tính chất ấy, thì hai tập hợp đó cũng có các hàm duy nhất giữa _chính chúng_, nên chúng sẽ đẳng cấu với nhau. Một cách hình thức hơn, nếu có hai tập hợp $X$ và $Y$ sao cho $\exists!X \to 1 \land \exists!Y \to 1$ và cả hai đều có tính chất này ("đúng một hàm từ bất kỳ tập hợp nào khác đến tập hợp này"), thì ta cũng có $X \cong Y$.

![Đối tượng cuối](../02_category/terminal_object_internal_isomorphisms.svg)

Và vì không có tập hợp nào khác ngoài tập hợp đơn phần tử có tính chất này, chúng ta có thể dùng nó làm định nghĩa tập hợp đơn phần tử: 

{: .definition}

> Tập hợp đơn phần tử $1$ là một tập hợp sao cho tồn tại một hàm duy nhất từ bất kỳ tập hợp nào khác đến nó; tức là nếu ta có $\forall  X  \exists!  X \to 1$, thì $1$ là tập hợp đơn phần tử.

![Đối tượng cuối](../02_category/terminal_object.svg)

Nhờ đó, chúng ta có được một định nghĩa hoàn toàn bên ngoài (sai khác một đẳng cấu) về tập hợp đơn phần tử, và từ đó một định nghĩa về phần tử tập hợp --- các phần tử của một tập hợp cho trước...

![Một tập hợp có ba phần tử](../02_category/elements_set.svg)

...chỉ là các hàm từ tập hợp đơn phần tử đến tập hợp ấy.

![Các hàm từ tập hợp đơn phần tử](../02_category/elements_external.svg)

Lưu ý rằng từ tính chất này suy ra tập hợp đơn phần tử có đúng một phần tử, qua đó xác nhận định nghĩa của chúng ta là đúng.

![Các hàm từ tập hợp đơn phần tử](../02_category/singleton_elements_external.svg)

**Bài tập 2:** Chính xác thì vì sao điều đó được suy ra (hãy kiểm tra định nghĩa)?

### Định nghĩa tập hợp rỗng từ bên ngoài 

Tập hợp rỗng dĩ nhiên là tập hợp không có phần tử nào, nhưng chúng ta sẽ nói điều này như thế nào mà không nhắc đến phần tử?

Trong chương trước, chúng ta đã lưu ý một tính chất thú vị của tập hợp rỗng:

{: .theorem}

> Có một hàm duy nhất từ tập hợp rỗng đến bất kỳ tập hợp nào khác.

Và một lần nữa, vì tập hợp rỗng là tập hợp duy nhất có tính chất này, chúng ta có thể đảo ngược phát biểu trên và dùng nó làm định nghĩa: 

{: .definition}

> Tập hợp rỗng là một tập hợp sao cho tồn tại một hàm từ nó đến bất kỳ tập hợp nào khác.

*Bài tập 3:* Vì sao hàm từ tập hợp rỗng là duy nhất?

![Đối tượng đầu](../02_category/initial_object.svg)

Những độc giả tinh ý sẽ nhận thấy sự tương đồng giữa các sơ đồ mô tả đối tượng đầu và đối tượng cuối (đúng vậy, hai khái niệm này dĩ nhiên là đối ngẫu với nhau).

![Đối ngẫu đầu-cuối](../02_category/initial_terminal_duality.svg)

Một số độc giả _còn tinh ý hơn nữa_ (các bạn ơi, xin bớt lại một chút, các bạn _quá tinh ý_ rồi) có thể cũng nhận thấy sự tương đồng giữa các sơ đồ tích/đối tích và các sơ đồ đối tượng đầu/cuối.

![Đối tích và tích](../02_category/coproduct_product_duality.svg)

Sự tương đồng giữa các sơ đồ đến từ cách tiếp cận tổng quát giống nhau để định nghĩa các thứ --- trong cả hai trường hợp, chúng ta tìm ra tính chất khiến một khái niệm có ích, rồi định nghĩa khái niệm sao cho nó có tính chất ấy*.

### Áp dụng hàm

Sau khi thấy định nghĩa phần tử tập hợp bằng hàm, có lẽ chúng ta sẽ muốn hỏi: nếu các phần tử được biểu diễn bằng hàm, thì làm thế nào để _áp dụng_ một hàm cho trước lên một phần tử của một tập hợp (và nhận lại một phần tử của tập hợp khác)?

![Áp dụng hàm - sơ đồ bên trong](../02_category/application_internal_function.svg)

Câu trả lời đơn giản đến bất ngờ --- _chọn_ một phần tử từ một tập hợp cũng chính là dựng một hàm từ tập hợp đơn phần tử đến phần tử ấy.

![Áp dụng hàm - sơ đồ bên trong](../02_category/application_internal.svg)

Rồi _áp dụng_ một hàm lên một phần tử cũng chính là _hợp thành_ hàm phần tử với hàm mà chúng ta muốn áp dụng.

![Áp dụng hàm - sơ đồ bên ngoài](../02_category/application_external.svg)

Kết quả là hàm biểu diễn phần tử được hàm vừa áp dụng trả về.

{: .theorem}

> Gọi $g$ là một phần tử của tập hợp $X$, gọi hàm $g: 1 \to X$ là hàm biểu diễn phần tử đó, và gọi $f: X \to Y$ là một hàm bất kỳ từ $X$ đến một tập hợp khác. Khi đó, hợp thành của hai hàm $f \circ g: 1 \to Y$ chính là hàm biểu diễn phần tử là kết quả của việc gọi hàm $f$ với giá trị của $g$ làm đối số $f(g)$.

### Kết luận

Đây là một chút giới thiệu về Elementary Theory of the Category of Sets (ETCS) của Lawvere, tức Lý thuyết sơ cấp về phạm trù các tập hợp, đưa ra một định nghĩa chặt chẽ về lý thuyết tập hợp (tương đương với lý thuyết tập hợp ZFC) chỉ dùng khái niệm hàm. 

Chúng ta có thể trình bày toàn bộ lý thuyết này, liệt kê tất cả các tiên đề cần thiết, nhưng hiện tại có lẽ điều quan trọng hơn là hiểu vì sao ngay từ đầu chúng ta lại muốn có nó. 

Câu trả lời ngắn gọn: vì nó tổng quát hơn định nghĩa truyền thống; định nghĩa mới này còn áp dụng cho những đối tượng không hẳn là tập hợp, nhưng _giống_ tập hợp ở một vài phương diện.

Bạn có thể nói rằng các định nghĩa ấy áp dụng cho những _phạm trù đối tượng_ hoàn toàn khác nhau (nháy mắt, nháy mắt).

### Sơ lược về phạm trù

Có lẽ đã đến lúc tìm hiểu phạm trù là gì. Đây là một định nghĩa ngắn gọn: một phạm trù gồm các đối tượng (tập hợp là một ví dụ) và các cấu xạ đi từ đối tượng này đến đối tượng khác (hành xử như hàm) và có thể hợp thành. Chúng ta có thể nói thêm rất nhiều về phạm trù, thậm chí đưa ra một định nghĩa hình thức, nhưng lúc này, bạn chỉ cần nhớ rằng tập hợp là một ví dụ về phạm trù, và các đối tượng trong phạm trù giống tập hợp, ngoại trừ việc chúng ta không _thấy_ các phần tử của chúng; tức là các khái niệm của lý thuyết phạm trù được thể hiện qua các sơ đồ bên ngoài, còn các khái niệm thuần tuý của lý thuyết tập hợp có thể được thể hiện qua các sơ đồ bên trong.

![So sánh lý thuyết phạm trù và lý thuyết tập hợp](../02_category/set_category.svg)

Khi ở trong thế giới tập hợp, chúng ta có thể xem mỗi tập hợp như một tập hợp các phần tử riêng lẻ. Trong lý thuyết phạm trù, chúng ta không có khái niệm ấy. Tuy nhiên, bỏ khái niệm ấy đi cho phép chúng ta định nghĩa các khái niệm như tập hợp tổng và tập hợp tích theo một cách hoàn toàn khác và tổng quát hơn. Hơn nữa, chúng ta luôn có cách "quay lại" lý thuyết tập hợp bằng những thủ thuật ở phần trước.

| Lý thuyết phạm trù    | Lý thuyết tập hợp  |
| --------------------- | ------------------ |
| Phạm trù              | **Không có**       |
| Đối tượng và cấu xạ    | Tập hợp và hàm     |
| **Không có**           | Phần tử           |

Khi chuyển sang các sơ đồ bên ngoài, chúng ta không còn nhìn thấy những thứ cụ thể (các phần tử của tập hợp), nhưng có được khả năng thu nhỏ góc nhìn để thấy toàn bộ vũ trụ mà trước đó chúng ta bị mắc kẹt bên trong. 

### Tập hợp so với phạm trù

Một nhận xét trước khi tiếp tục: ở phần vừa rồi, có thể chúng ta đã tạo cảm giác rằng lý thuyết phạm trù và lý thuyết tập hợp phần nào đang cạnh tranh với nhau. Có lẽ quan niệm này sẽ phần nào đúng nếu lý thuyết phạm trù và lý thuyết tập hợp nhằm mô tả các hiện tượng _cụ thể_, giống như thuyết tương đối và lý thuyết cơ học lượng tử đều được kỳ vọng giải thích thế giới vật lý. Các lý thuyết cụ thể chủ yếu được xây dựng như những _mô tả_ về thế giới, và như vậy, việc liên kết chúng trong một hệ thống thứ bậc nào đó là hợp lý.

Ngược lại, các lý thuyết trừu tượng, như lý thuyết phạm trù và lý thuyết tập hợp, giống _ngôn ngữ_ để diễn đạt những mô tả ấy hơn --- chúng vẫn có thể được liên kết, và thực tế _được_ liên kết theo nhiều cách, nhưng không có quan hệ thứ bậc vốn có giữa hai lý thuyết. Vì vậy, tranh luận xem lý thuyết nào cơ bản hơn hay tổng quát hơn chỉ là bài toán con gà và quả trứng, như bạn sẽ thấy ở chương tiếp theo.

## Trở lại với phạm trù

> "...xử lý tất cả các phần tử của một tập hợp bằng cách bỏ qua chúng và làm việc với định nghĩa của tập hợp." --- Dijkstra (trích "On the cruelty of really teaching computing science")

Tất cả các sách về lý thuyết phạm trù, kể cả cuốn này, đều bắt đầu bằng việc nói về lý thuyết tập hợp. Nhìn lại, tôi thực sự không biết vì sao lại như vậy --- những cuốn sách tập trung vào một chủ đề thường không bắt đầu bằng cách giới thiệu một _chủ đề hoàn toàn khác_ (trước cả khi bắt đầu nói về chủ đề chính). Có lẽ cách tiếp cận bắt đầu từ tập hợp _là_ cách tốt nhất để giới thiệu phạm trù với mọi người. Hoặc có lẽ việc dùng tập hợp để giới thiệu phạm trù là một trong những điều người ta làm chỉ vì ai khác cũng làm như vậy. Nhưng có một điều chắc chắn --- chúng ta không _cần_ nghiên cứu tập hợp để hiểu phạm trù. Vì vậy, giờ đây tôi muốn bắt đầu lại và nói về phạm trù như một khái niệm nền tảng. Hãy giả vờ đây là một cuốn sách mới; tôi tự hỏi liệu có thể đề tặng nó cho một người khác, chẳng hạn Tom Lehrer, người qua đời năm 2025 khi ấn bản đầu tiên vẫn chưa hoàn thành). Nhưng thôi.

### Đối tượng và cấu xạ

Một phạm trù là một họ các đối tượng (các thứ), trong đó những "thứ" ấy có thể là bất cứ thứ gì bạn muốn. Chẳng hạn, hãy xét những quả bóng ~~nhiều màu~~ xám này:

![Các quả bóng](../02_category/elements.svg)

Một phạm trù gồm một họ các đối tượng cùng một số mũi tên nối các đối tượng với nhau. Chúng ta gọi những mũi tên ấy là _cấu xạ_. Chúng có một đối tượng nguồn và một đối tượng đích (lúc này, bạn có thể coi chúng như hàm).

![Một phạm trù](../02_category/category.svg)

Khoan đã, chúng ta nói rằng tất cả các tập hợp tạo thành một phạm trù, nhưng đồng thời, bất kỳ tập hợp riêng lẻ nào cũng có thể được xem là một phạm trù tự thân (chỉ là một phạm trù không có cấu xạ). Điều này đúng và rất đặc trưng cho lý thuyết phạm trù --- một cấu trúc có thể được xem xét từ nhiều góc độ và đóng nhiều vai trò khác nhau, thường theo cách đệ quy.

Tuy nhiên, sự tương đương cụ thể này (một tập hợp như một phạm trù không có cấu xạ) hiếm khi có ích. Không phải vì nó sai ở chỗ nào, mà vì lý thuyết phạm trù _hoàn toàn xoay quanh các cấu xạ_ --- nếu các _mũi tên_ trong lý thuyết tập hợp chẳng qua là mối nối giữa các tập hợp đóng vai trò nguồn và đích của chúng, thì trong lý thuyết phạm trù, các _đối tượng_ chẳng qua là nguồn và đích cho những mũi tên nối chúng với các đối tượng khác. Vì vậy, trong sơ đồ trên, các mũi tên, chứ không phải các đối tượng, được tô màu: theo tôi, phạm trù các tập hợp thực ra nên được gọi là _phạm trù các hàm_.

Nhân nói đến chuyện đó, hãy lưu ý rằng các đối tượng trong một phạm trù có thể được nối bởi nhiều mũi tên, và việc có cùng tập hợp nguồn và đích hoàn toàn không khiến các mũi tên tương đương. Chẳng hạn, trong lý thuyết tập hợp, có vô hạn hàm đi từ số đến Boolean, và việc chúng có cùng kiểu đầu vào và kiểu đầu ra (hay cùng _chữ ký kiểu_, như cách chúng ta thường nói) hoàn toàn không khiến chúng tương đương với nhau.

![Hai tập hợp được nối bằng nhiều hàm](../02_category/set_arrows.svg)

Có một số loại phạm trù chỉ có một cấu xạ giữa hai đối tượng (theo mỗi chiều), nhưng chúng ta sẽ nói về chúng trong một chương sau.

### Phép hợp thành

Yêu cầu quan trọng nhất để một cấu trúc được gọi là phạm trù là _hai cấu xạ có thể tạo thành cấu xạ thứ ba_, hay nói cách khác, các cấu xạ _có thể hợp thành_. 

Với ba đối tượng và hai mũi tên nối tiếp giữa chúng, chúng ta có thể tạo một mũi tên thứ ba (trong lý thuyết tập hợp, nó tương đương với việc áp dụng liên tiếp hai hàm đầu).

![Phép hợp thành cấu xạ](../02_category/composition.svg)

Một cách hình thức, yêu cầu này được phát biểu như sau:

{: .definition}

> Toán tử hợp thành là một toán tử, thường được ký hiệu bằng $\circ$, sao cho với bất kỳ đối tượng $A$, $B$ và $C$ nào, với mỗi cặp cấu xạ $g: A \to B$ và $f: B \to C$, tồn tại một cấu xạ thứ ba $(f \circ g): A \to C$.

![Phép hợp thành cấu xạ trong bối cảnh có thêm cấu xạ](../02_category/composition_arrows.svg)

Nếu bạn còn nhớ, trong lý thuyết tập hợp, chúng ta đã chọn hàm thay vì các loại quan hệ khác vì chúng có thể hợp thành. Ở đây, chúng ta chỉ việc tạo ra khái niệm cấu xạ và định nghĩa nó sao cho có thể hợp thành (giống như đã tạo ra tích, đối tích, và sau đó là tập hợp rỗng cùng tập hợp đơn phần tử). Hãy xem định nghĩa này đưa chúng ta đến đâu.

Lưu ý rằng phép hợp thành hàm được đọc từ phải sang trái. Ví dụ, áp dụng $g$ rồi áp dụng $f$ được viết là $f \circ g$, chứ không phải ngược lại. (Bạn có thể coi đó là cách viết tắt của $f(g(a))$). Chúng ta có thể đọc $\circ$ là "sau", chẳng hạn $f \;\text{after}\; $g.

### Luật đồng nhất

Muốn có các số, bạn phải có số không. Số không của lý thuyết phạm trù là thứ chúng ta gọi là "cấu xạ đồng nhất" của mỗi đối tượng. Nói ngắn gọn, đây là một cấu xạ không làm gì cả.

![Cấu xạ đồng nhất (nhưng cũng có thể là bất kỳ cấu xạ nào khác)](../02_category/identity.svg)

Cần đánh dấu cấu xạ này vì có thể có (hãy nhắc lại một điều rất quan trọng, và đến lúc này có lẽ cũng rất nhàm chán) nhiều cấu xạ đi từ một đối tượng đến chính đối tượng ấy (chẳng hạn, trong phạm trù các tập hợp, chúng ta gặp vô số hàm có tập hợp các số làm nguồn và đích, như $\operatorname{negate}$, $\operatorname{square}$, $\operatorname{add\ one}$, và chúng hoàn toàn không phải là cấu xạ đồng nhất).

Khoan, chúng ta đã có... Cấu xạ đồng nhất được hình thức hoá theo một cách thú vị:

{: .definition}

> Các cấu xạ đồng nhất của từng đối tượng $A$, $B$, ký hiệu $ID_{A}: A \to A$, $ID_{B}: B \to B$, v.v., thoả mãn rằng với bất kỳ $f: A \to B$ nào, ta có $f \circ ID_{A} = ID_{B} \circ f = f$

Vậy chúng thực sự "không làm gì cả".

Một cấu trúc phải có một cấu xạ đồng nhất cho mỗi đối tượng để được gọi là phạm trù --- điều này được gọi là _luật đồng nhất_.

**Bài tập 4:** Cấu xạ đồng nhất trong phạm trù các tập hợp là gì?

### Luật kết hợp

Phép hợp thành đặc biệt không chỉ vì bạn có thể lấy hai cấu xạ bất kỳ với chữ ký thích hợp để tạo ra cấu xạ thứ ba, mà còn vì bạn có thể làm điều đó mãi mãi; tức là với mỗi $n$ mũi tên nối tiếp, mỗi mũi tên có đối tượng nguồn là đối tượng đích của mũi tên trước, chúng ta có thể vẽ một (đúng một) mũi tên tương đương với việc áp dụng liên tiếp cả $n$ mũi tên.

![Phép hợp thành cấu xạ với nhiều đối tượng](../02_category/composition_n_objects.svg)

Nếu xem kỹ định nghĩa trên, chúng ta thấy nó có thể được quy về việc áp dụng nhiều lần định nghĩa sau.

{: .definition}

> Một phép toán có tính kết hợp nếu, với 3 cấu xạ nối tiếp $f$ $g$ $h$, việc dùng phép toán đó để kết hợp $h$ với $g$ rồi kết hợp kết quả với $f$ phải giống như kết hợp $h$ với kết quả của $g$ và $f$: $(h \circ g) \circ f = h \circ (g \circ f)$).

Định nghĩa này có thể được biểu diễn bằng sơ đồ sau, sơ đồ chỉ giao hoán nếu công thức đúng (vì mọi sơ đồ lý thuyết phạm trù của chúng ta đều giao hoán, trong những trường hợp như vậy, chúng ta có thể nói công thức và sơ đồ là tương đương).

![Phép hợp thành cấu xạ với nhiều đối tượng](../02_category/composition_associativity.svg)

Công thức này (và sơ đồ) là định nghĩa của một tính chất gọi là *tính kết hợp*. Có tính kết hợp là điều cần thiết để phép hợp thành hàm thực sự được gọi là phép hợp thành hàm (và do đó, để một phạm trù thực sự được gọi là phạm trù). Điều này cũng cần thiết để các sơ đồ của chúng ta hoạt động, vì sơ đồ chỉ có thể biểu diễn những cấu trúc có tính kết hợp (thử tưởng tượng nếu sơ đồ trên không giao hoán, điều đó sẽ hết sức kỳ lạ).

Tính kết hợp không chỉ liên quan đến sơ đồ. Chẳng hạn, khi biểu diễn quan hệ bằng công thức, tính kết hợp chỉ có nghĩa là dấu ngoặc không quan trọng trong các công thức (như định nghĩa $(h \circ g) \circ f = h \circ (g \circ f)$ cho thấy).

Và tính kết hợp cũng không chỉ liên quan đến phạm trù; nó còn là tính chất của nhiều phép toán khác trên những loại đối tượng khác. Ví dụ, nếu nhìn vào các số, chúng ta thấy phép nhân có tính kết hợp, chẳng hạn $(1 \times 2) \times 3 = 1 \times (2 \times 3)$. Còn phép chia thì không: $(1 / 2) / 3 \neq 1 / (2 / 3)$.

### Sơ đồ giao hoán

Các sơ đồ trên dùng màu để minh hoạ rằng cấu xạ màu xanh lá tương đương với hai cấu xạ kia (chứ không chỉ là một cấu xạ không liên quan), nhưng trên thực tế, ký pháp này hơi thừa, vì lý do *duy nhất* để vẽ sơ đồ ngay từ đầu là biểu diễn các đường đi tương đương với nhau. Mọi đường đi khác chỉ thuộc về những sơ đồ khác.

![Phép hợp thành cấu xạ - một sơ đồ giao hoán](../02_category/composition_commuting_diagram.svg)

Như đã nhắc thoáng qua trong chương trước, mọi sơ đồ như vậy (trong đó bất kỳ hai đường đi nào giữa hai đối tượng cũng tương đương với nhau) được gọi là _sơ đồ giao hoán_ (hay các sơ đồ _giao hoán_). Tất cả sơ đồ trong cuốn sách này (ngoại trừ những sơ đồ sai, nháy mắt, nháy mắt) đều giao hoán.

Một cách hình thức hơn, một sơ đồ giao hoán là sơ đồ trong đó, với hai đối tượng $a$ và $b$ cùng hai dãy cấu xạ giữa hai đối tượng ấy, chúng ta có thể nói rằng hai dãy này tương đương.

Sơ đồ trên là một trong những sơ đồ giao hoán đơn giản nhất.

Mặc dù tất cả sơ đồ trong sách đều giao hoán, nhìn chung, **không phải mọi sơ đồ đều giao hoán**. Nghĩa là có nhiều cấu xạ cùng chữ ký kiểu nhưng không tương đương với nhau.

### Định nghĩa hình thức

Để tiện tra cứu về sau, hãy phát biểu lại phạm trù là gì:

{: .definition}

> Một phạm trù là một họ các *đối tượng* (có thể coi chúng như các điểm) và *cấu xạ* (mũi tên) đi từ đối tượng này đến đối tượng khác, trong đó:
> 1. Mỗi đối tượng phải có một cấu xạ đồng nhất.
> 2. Phải có một cách hợp thành hai cấu xạ có chữ ký kiểu thích hợp thành cấu xạ thứ ba, theo cách có tính kết hợp.

Chỉ vậy thôi. 

Và vì phạm trù hành xử như tập hợp, nhiều định nghĩa của lý thuyết tập hợp cũng đúng với phạm trù. Chẳng hạn, nếu viết lại định nghĩa tích tập hợp, thay "tập hợp" bằng "đối tượng" và "hàm" bằng "cấu xạ", chúng ta có định nghĩa tổng quát của tích trong phạm trù:

{: .definition}

> Tích của $A$ và $B$, ký hiệu $A \times B$, là ~~một tập hợp~~ một đối tượng sao cho: 
1. Tồn tại hai ~~hàm~~ cấu xạ "chiếu" $A \times B \to A$ và $A \times B \to B$. 
2. Với bất kỳ tích giả mạo $I$ nào cũng có những ~~hàm~~ cấu xạ chiếu như vậy ($I \to A$ và $I \to B$), phải tồn tại một ~~hàm~~ cấu xạ duy nhất với chữ ký kiểu $g: I \to A \times B$, chuyển tích giả mạo thành tích thật, sao cho hai ~~hàm~~ cấu xạ trên chỉ là hợp thành của $g$ với các phép chiếu của tích.

Hoá ra chúng ta đã làm lý thuyết phạm trù ngay từ chương đầu tiên.

## Bổ sung: Vì sao phạm trù lại như vậy?

_Vì sao_ phạm trù được định nghĩa bởi hai luật ấy, chứ không phải hai luật khác (hay một, ba, bốn, v.v.)? Từ một góc nhìn, câu trả lời có vẻ hiển nhiên --- chúng ta nghiên cứu phạm trù vì chúng _hoạt động được_. Ý tôi là, hãy xem có bao nhiêu ứng dụng... Nhưng đồng thời, lý thuyết phạm trù là một lý thuyết trừu tượng, nên mọi thứ về nó đều có phần tuỳ ý: bạn có thể bỏ đi một luật --- và có một lý thuyết khác trông giống lý thuyết phạm trù (dù trên thực tế có thể hoá ra khá khác). Hoặc bạn có thể thêm một luật nữa để có một lý thuyết khác nữa (quả thực có những luật và lý thuyết như vậy, và chúng ta sẽ tìm hiểu chúng sau). Vì vậy, nếu tập hợp luật cụ thể này hoạt động tốt hơn bất kỳ tập hợp nào khác, thì sự kiện ấy cần được giải thích. Không phải một lời giải thích _toán học_ (chẳng hạn, chúng ta không thể _chứng minh_ bằng bất kỳ cách nào rằng lý thuyết này tốt hơn một lý thuyết khác), nhưng dù sao vẫn cần một lời giải thích. Những gì tiếp theo là nỗ lực của _tôi_ nhằm đưa ra lời giải thích như vậy cho các luật _đồng nhất_ và _kết hợp_.

### Đồng nhất và đẳng cấu

Lý do cần luật đồng nhất hiển nhiên hơn hẳn. Vì sao chúng ta cần một cấu xạ không làm gì cả? Vì cấu xạ là những thành phần cơ bản tạo nên ngôn ngữ của chúng ta; chúng ta cần cấu xạ đồng nhất để có thể nói cho đúng. Ví dụ, một khi đã định nghĩa khái niệm cấu xạ đồng nhất, chúng ta có thể dựa vào nó để đưa ra định nghĩa _đẳng cấu_ theo lý thuyết phạm trù (điều này quan trọng vì khái niệm đẳng cấu rất quan trọng đối với lý thuyết phạm trù).

Như đã nói trong chương trước, một đẳng cấu giữa hai đối tượng ($A$ và $B$) gồm hai cấu xạ --- ($A → B$ và $B → A$), sao cho các hợp thành của chúng tương đương với các hàm đồng nhất của các đối tượng tương ứng. Một cách hình thức, các đối tượng $A$ và $B$ đẳng cấu nếu tồn tại các cấu xạ $f: A → B$ và $g: B → A$ sao cho $f \circ g = ID_{B}$ và $g \circ f = ID_{A}$.

Và đây là cùng điều ấy được biểu diễn bằng một sơ đồ giao hoán.

![Đẳng cấu](../02_category/isomorphism.svg)

Giống sơ đồ trước, sơ đồ này biểu diễn cùng một sự kiện (đơn giản) như công thức: đi từ một đối tượng ($A$ hay $B$) đến đối tượng kia, rồi quay về đối tượng ban đầu, cũng giống như áp dụng cấu xạ đồng nhất, tức là không làm gì cả.

### Tính kết hợp và thuyết quy giản

Tính kết hợp --- nó có nghĩa là gì, và vì sao nó lại có mặt ở đây? Để giải quyết câu hỏi này, trước hết chúng ta phải nói về một khái niệm khác --- khái niệm _thuyết quy giản_:

Thuyết quy giản là quan niệm rằng hành vi của các hiện tượng phức tạp có thể được hiểu thông qua một số hiện tượng _đơn giản hơn_ và cơ bản hơn. Nói cách khác, các thứ cứ ngày càng đơn giản khi chúng trở nên "nhỏ hơn" (hoặc khi được nhìn từ một mức thấp hơn). Một ví dụ của thuyết quy giản là quan niệm rằng có thể hiểu hoàn toàn hành vi của vật chất bằng cách nghiên cứu hành vi của các thành phần cấu tạo nên nó, tức các nguyên tử (từ này có nghĩa là "không thể chia nhỏ").

Liệu quan điểm quy giản có _đúng một cách phổ quát_ hay không, tức là liệu có thể xây dựng một _lý thuyết về mọi thứ_ mô tả toàn bộ vũ trụ bằng một tập hợp các luật rất đơn giản hay không, là một câu hỏi mà chúng ta có thể tranh luận cho đến khi vũ trụ ấy chắc chắn sụp đổ. Tuy nhiên, điều chắc chắn là _thuyết quy giản làm nền tảng cho mọi hiểu biết của chúng ta_, đặc biệt trong khoa học và toán học --- mỗi ngành khoa học đều dựa trên một tập hợp các _nền tảng_ đơn giản (chẳng hạn các hạt cơ bản trong vật lý hạt, các nguyên tố hoá học trong hoá học, v.v.), từ đó xây dựng các lý thuyết phức tạp hơn rất nhiều. Và quan điểm quy giản được thể hiện trong luật kết hợp. Cũng như trong luật giao hoán có liên hệ chặt chẽ với nó, mà chúng ta sẽ tìm hiểu ở chương tiếp theo.

<!--
{% if site.distribution == 'print'%}
-->

#### Tính giao hoán

Vậy nếu nguyên lý này quan trọng đến thế, có khả năng hình thức hoá nó (tức là chuyển nó sang ngôn ngữ toán học) sẽ rất có ích, và đó là điều chúng ta sẽ thử làm bây giờ. Một cách phát biểu nguyên lý quy giản là nói rằng _mỗi thứ chẳng qua là tổng các bộ phận của nó_; tức là nếu kết hợp cùng một tập hợp các bộ phận, chúng ta luôn thu được cùng một kết quả. Để hình thức hoá điều này, chúng ta lấy một tập hợp các đối tượng (những quả bóng) cùng một cách kết hợp chúng (mà chúng ta sẽ ký hiệu bằng một dấu chấm).

Vậy nếu có một "công thức" cho trước, chẳng hạn

![Tính giao hoán](../02_category/commutativity_1.svg)

Thì chúng ta cũng sẽ có

![Tính giao hoán](../02_category/commutativity_2.svg)

Hay đơn giản là

![Tính giao hoán](../02_category/commutativity_formula.svg)

Tình cờ, đây chính là định nghĩa của một luật toán học gọi là _tính giao hoán_.

Một ngữ cảnh đơn giản áp dụng luật này --- các số tự nhiên có tính giao hoán đối với phép cộng, chẳng hạn 1 + 2 = 2 + 1 (chúng ta sẽ tìm hiểu thêm về điều này trong chương về nhóm).

**Bài tập 5:** Nếu các đối tượng của chúng ta là tập hợp, những phép toán tập hợp nào có thể đóng vai trò dấu chấm trong ví dụ này (tức là những phép toán nào có tính giao hoán)?

#### Tính kết hợp

Đôi khi chúng ta quan sát thấy những hiện tượng vẫn có thể được biểu diễn như sự kết hợp của một tập hợp các thành phần cơ bản cho trước, nhưng chỉ khi chúng được kết hợp theo một cách _cụ thể_ (thay vì _bất kỳ_ cách kết hợp nào, như trong các ngữ cảnh giao hoán). Chẳng hạn, như bất kỳ người thợ sửa xe nào cũng có thể xác nhận, một chiếc xe đạp quả thực chỉ là sự kết hợp của các bánh xe và bộ khung...

![Xe đạp không có tính giao hoán](../02_category/commutativity_bike.svg)

...nhưng điều đó không có nghĩa là mọi cách kết hợp các bộ phận trên đều tạo thành một chiếc xe đạp. Ví dụ, đặt bánh trước của xe đạp vào phía sau khung sẽ không tạo ra một chiếc xe đạp hoạt động được. Còn kết hợp hai bánh xe với nhau thì đơn giản là không thể.

![Xe đạp không có tính giao hoán](../02_category/commutativity_bike_2.svg)

Và lấy một ví dụ hình thức, việc hàm $g$ có thể được kết hợp với $f$ để tạo thành $f \circ g$ không có nghĩa là chúng cũng có thể tạo thành $g \circ f$; hợp thành hai hàm theo cả hai chiều chỉ có thể xảy ra nếu cả hai hàm có cùng một tập hợp làm cả nguồn lẫn đích ($f: X\to X$ và $g: X \to X$). Nhưng ngay cả khi đó, kết quả cuối cùng cũng không nhất thiết giống nhau.

Dù sao, chúng ta đã xác định rằng phép hợp thành hàm (cũng như việc lắp xe đạp) không tuân theo luật giao hoán, tức là không phải mọi hàm (hay bộ phận xe đạp) đều hợp thành được với mọi hàm (hay bộ phận) khác. Tuy nhiên, chúng ta vẫn biết rằng _một số_ có thể làm như vậy; tức là nếu bạn ghép các chữ ký hàm cho khớp (hoặc với xe đạp, nếu bạn dùng đúng bộ phận ở đúng chỗ), chúng sẽ kết hợp với nhau suôn sẻ. Vì vậy, _thứ tự chúng ta kết hợp các bộ phận riêng lẻ không ảnh hưởng đến kết quả cuối cùng_. Chẳng hạn, khi lắp một chiếc xe đạp, việc gắn bánh trước vào khung trước hay gắn bánh sau trước không quan trọng, kết quả sẽ như nhau.

![Xe đạp có tính kết hợp](../02_category/associativity_bike.svg)

Tương tự, khi kết hợp các hàm, bất kỳ lúc nào, mỗi cặp hàm cũng có thể được thay bằng hàm thu được khi kết hợp chúng. Nói cách khác, tất cả những cách khác nhau để kết hợp một tập hợp hàm cho trước cuối cùng đều hội tụ về cùng một kết quả.

![A . (B . C) = D,  (A . B) . C = D](../02_category/associativity_function_tree.svg)

Sự kiện này được thể hiện bởi một phiên bản hạn chế hơn của tính giao hoán, mà chúng ta gọi là _tính kết hợp_; với hàm, nó thường được phát biểu như sau.

![A -> X . (X -> B . B -> C) = (A -> X . X -> B) . B -> C](../02_category/associativity_formula_function.svg)

Hay tổng quát hơn (với bất kỳ phép toán nào).

![A . (B . C) = D,  (A . B) . C = D](../02_category/associativity_formula.svg)

Đây là cốt lõi của tính kết hợp --- nó cho chúng ta khả năng nghiên cứu các hiện tượng phức tạp bằng cách phóng to một bộ phận muốn xem xét tại một thời điểm cho trước, rồi nhìn riêng bộ phận đó.

Lưu ý rằng toán tử đã định nghĩa chỉ cho phép kết hợp các thứ trong một chiều (bạn có thể gắn một thứ ở bên trái và bên phải, nhưng không thể ở phía trên hay phía dưới). Sau này, chúng ta sẽ tìm hiểu một mở rộng của khái niệm lý thuyết phạm trù (gọi là phạm trù monoidal) "hỗ trợ" làm việc trong 2 chiều.

**Bài tập 6:** Thực ra, trong chương này, chúng ta đã định nghĩa một trường hợp hợp thành 2 chiều, chỉ là chưa *nói* đó là phép hợp thành 2 chiều. Bạn có nhận ra không?


#### Tính kết hợp và tính giao hoán

Chúng ta đã nói rằng tính kết hợp là một phiên bản hạn chế hơn của tính giao hoán. Điều này đúng theo một nghĩa hình thức, như chúng ta sẽ chỉ ra ở đây. Đến lúc này, có thể bạn đã nhận ra rằng một toán tử hợp thành các cấu xạ trong một phạm trù cho trước (thứ chúng ta ký hiệu bằng dấu chấm) tự nó cũng là một cấu xạ, nhận một cặp cấu xạ và trả về một cấu xạ khác nữa (tức là $$A \times B \to C$$).

Với một toán tử hợp thành của một phạm trù và một cấu xạ thuộc cùng phạm trù ấy (trong trường hợp này là quả bóng xanh lá), hãy tạo thêm hai cấu xạ (mà chúng ta gọi là các cấu xạ "được curry hoá" (sẽ nói thêm ở chương tiếp theo)) ($$A \to C$$ và $$B \to C$$) bằng cách lần lượt cố định đối số thứ hai hoặc thứ nhất của toán tử; tức là một cấu xạ gắn quả bóng xanh lá vào "đầu" của hàm được truyền vào làm đối số (tạo ra nguồn của nó), và một cấu xạ gắn quả bóng ấy vào "cuối" (nhận đích của nó làm nguồn).

![(A X B) -> C) = A -> B -> C](../02_category/associativity_commutativity.svg)

Bây giờ, hãy lấy hai cấu xạ như vậy, có hướng khác nhau và đối tượng khác nhau, rồi tự hỏi: trong những điều kiện nào hai cấu xạ ấy sẽ giao hoán, tức là khi nào công thức đó được thoả mãn?

![(A X B) -> C) = A -> B -> C](../02_category/associativity_commutativity_2.svg)

Khai triển công thức cho chúng ta câu trả lời: chúng giao hoán khi toán tử dấu chấm ban đầu có tính kết hợp.

![(A X B) -> C) = A -> B -> C](../02_category/associativity_commutativity_3.svg)

Như vậy, chúng ta đã thiết lập một mối liên hệ giữa tính kết hợp và tính giao hoán.

<!--
{%endif%}
-->


<!--
{% if site.distribution == 'print' %}
-->

## Lời giải

---

**Bài tập 1:** Vì sao cấu trúc này được gọi là tích? Gợi ý: Nó có bao nhiêu phần tử?

Tích Descartes được gọi là "tích" vì số phần tử của $A × B$ bằng *tích* của số phần tử trong $A$ và $B$; chẳng hạn, nếu $A$ có 2 phần tử và $B$ có 3 phần tử, thì $A × B$ có $2 × 3 = 6$ phần tử.

---

**Bài tập 2:** Chính xác thì vì sao điều đó được suy ra [rằng tập hợp đơn phần tử có đúng một phần tử]?

Có đúng một hàm từ bất kỳ tập hợp nào đến tập hợp đơn phần tử, kể cả chính tập hợp đơn phần tử.

Vậy có đúng một hàm từ $1 \to 1$. Nhưng các hàm $1 \to X$ tương ứng với các phần tử của $X$. Do đó, $1$ thực sự có đúng một phần tử.

---

**Bài tập 3:** Vì sao hàm từ tập hợp rỗng là duy nhất?

Như đã xác lập, có đúng một hàm như vậy: "hàm rỗng" kỳ lạ.

---

**Bài tập 4:** Cấu xạ đồng nhất trong phạm trù các tập hợp là gì?

Trong phạm trù các tập hợp, cấu xạ đồng nhất của một tập hợp A là *hàm đồng nhất* $id_A: A → A$, ánh xạ mỗi phần tử đến chính nó. Hãy kiểm tra các luật!

---

**Bài tập 5:** Nếu các đối tượng của chúng ta là tập hợp, những phép toán tập hợp nào có thể đóng vai trò dấu chấm trong ví dụ này (tức là những phép toán nào có tính giao hoán)?

Các phép toán tập hợp có tính giao hoán: 

- *Hợp tập hợp*: tập hợp các phần tử thuộc $A$ hoặc $B$ (hoặc cả hai): ${1,2} ∪ {2,3} = {1,2,3} = {2,3} ∪ {1,2}$

- *Giao tập hợp*: tập hợp các phần tử thuộc cả $A$ và $B$: ${1,2} ∩ {2,3} = {2} = {2,3} ∩ {1,2}$

Các phép toán không có tính giao hoán:
- Hiệu tập hợp ($A - B ≠ B - A$)

---

**Bài tập 6**: Thực ra, trong chương này, chúng ta đã định nghĩa một trường hợp hợp thành 2 chiều, chỉ là chưa *nói* đó là phép hợp thành 2 chiều. Bạn có nhận ra không?

Có, chúng ta đã làm điều đó --- tích.

Một hàm $f: A \to B $ có thể hợp thành với một hàm $g : B \to C$ để thu được $g \circ f : A \to C$ (phép hợp thành hàm).

Nhưng $f: A \to B $ cũng có thể hợp thành với một hàm $f': A' \to B'$ (hay thực ra là bất kỳ chữ ký nào khác) để thu được $f \times f': A\times A' \to B \times B'$!

<!--
{%endif%}
-->

