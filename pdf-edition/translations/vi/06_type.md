---
layout: default
title: Types
---

# Kiểu

Trong chương này, chúng ta sẽ nói về kiểu. Điều này có thể khiến bạn thất vọng nếu mong được tìm hiểu càng nhiều phạm trù *mới* càng tốt (những thứ mà bạn thậm chí không ngờ thực ra là phạm trù cho đến màn bật mí bất ngờ)---ta đã nói về phạm trù các kiểu trong một ngôn ngữ lập trình cho trước ngay từ chương đầu tiên, và đã biết chúng tạo thành một phạm trù như thế nào. Tuy nhiên, kiểu không chỉ liên quan đến ngôn ngữ lập trình. Chúng còn hơn cả một phạm trù nữa để tìm hiểu. Chúng cũng nằm ở trung tâm của một lý thuyết toán học gọi là *lý thuyết kiểu*.

Lý thuyết kiểu là một lựa chọn thay thế cho lý thuyết tập hợp, cũng như chính lý thuyết phạm trù, để làm ngôn ngữ nền tảng của toán học, và là công cụ mạnh mẽ ngang với bất kỳ hệ hình thức nào trong số đó.

## Tập hợp, kiểu và nghịch lý Russell

Ta lại bắt đầu nói về tập hợp. Hầu hết các sách về lý thuyết phạm trù (và toán học nói chung) đều bắt đầu bằng tập hợp, rồi thường quay lại với tập hợp. Ngay cả trong một cuốn sách về lý thuyết phạm trù như cuốn này, định nghĩa thông thường của hầu hết các đối tượng toán học đều có tập hợp. Thật vậy, khi nghe định nghĩa monoid là phạm trù có một đối tượng, một người chỉ biết về tập hợp có thể nói:

> "Quên chuyện đó đi! Bạn đã thấy tập hợp chưa? Cũng là thứ ấy thôi, nhưng có thêm phép toán hai ngôi này."

Hay với *thứ tự* là phạm trù có một cấu xạ:

> "Bạn đã thấy tập hợp chưa? Cũng là thứ ấy thôi, nhưng một số phần tử lớn hơn những phần tử khác."

Lý do quan điểm "lấy tập hợp làm trung tâm" này phổ biến thực ra rất đơn giản: *tập hợp dễ hiểu*, nhất là khi ta làm việc ở mức độ khái niệm thường thấy trong tài liệu nhập môn.

Chẳng hạn, ai trong chúng ta cũng gom lại một tập hợp những dụng cụ cần cho một hoạt động nào đó (ví dụ *thước đo góc*, *compa* và *bút chì* cho giờ toán, hay *giấy*, các hộp *màu* và *cọ* khi vẽ) để khỏi quên thứ nào. Hoặc ta gom những người thường chơi với nhau thành nhóm này hay nhóm kia. Và vì thế, khi ta vẽ một vòng tròn quanh vài thứ, mọi người đều hiểu ta đang nói đến điều gì.

![Tập hợp](../06_type/sets.svg)

Tuy nhiên, cách hiểu ban đầu về tập hợp này có phần *quá đơn giản* (hay *ngây thơ*, như cách các nhà toán học gọi), bởi khi xem xét kỹ, nó dẫn đến một loạt nghịch lý không dễ giải quyết, nổi tiếng nhất là nghịch lý Russell.

### Nghịch lý Russell

Ngoài việc tự nó đã thú vị, nghịch lý Russell còn là một trong những động lực để xây dựng lý thuyết kiểu, nên ta sẽ bắt đầu chương này bằng việc tìm hiểu nó xuất hiện như thế nào và vì sao.

Hầu hết các tập hợp mà ta đã thấy (như tập rỗng và các tập đơn phần tử) không chứa *chính mình*.

![Những tập hợp không chứa chính mình](../06_type/sets_dont_contain_themselves.svg)

Tuy nhiên, vì các phần tử của tập hợp lại là các tập hợp, *một tập hợp có thể chứa chính mình*.

![Một tập hợp chứa chính mình](../06_type/set_contains_itself.svg)

Khả năng này là nguyên nhân gốc rễ của nghịch lý Russell.

Nghịch lý xuất hiện khi ta thử hình dung *tập hợp tất cả các tập hợp không chứa chính mình*. Trong ký hiệu tập hợp ban đầu, có thể định nghĩa nó là tập hợp chứa mọi tập hợp $x$ sao cho $x$ không là phần tử của $x$ (hay $\{x \mid x \notin x\}$).

![Nghịch lý Russell - phương án thứ nhất](../06_type/russells_paradox.svg)

Tuy nhiên, hình này có điều gì đó sai --- nếu nhìn vào định nghĩa, ta nhận ra tập hợp vừa định nghĩa *cũng không chứa chính mình*, nên nó cũng thuộc về đó.

![Nghịch lý Russell - phương án thứ nhất](../06_type/russells_paradox_2.svg)

Hừm, ở đây cũng có điều gì đó chưa ổn --- vì những điều chỉnh vừa thực hiện, tập hợp của ta giờ *chứa chính mình*.

Và loại tập hợp ra để nó không còn là phần tử của chính mình chỉ đưa ta trở về điểm xuất phát, nên ta chẳng còn đường nào để đi --- đó là nghịch lý Russell.

### Giải quyết nghịch lý bằng tập hợp

Tập hợp các tập hợp không chứa chính mình nghe có vẻ chẳng hữu ích lắm. Và quả thực là vậy --- thực ra, tôi chưa từng thấy nó được nhắc đến vì lý do nào khác ngoài việc dựng nên nghịch lý Russell. Vì thế, phản ứng ban đầu của hầu hết mọi người khi biết về nghịch lý Russell sẽ là điều gì đó như sau:

>"Khoan đã, chẳng lẽ ta không thể thêm vài quy tắc nói rằng bạn không được vẽ tập hợp các tập hợp không chứa chính mình sao?"

Đó chính là điều các nhà toán học Ernst Zermelo và Abraham Fraenkel bắt tay vào làm (không cố ý chơi chữ đâu). Những quy tắc bổ sung của họ dẫn đến một định nghĩa mới về lý thuyết tập hợp, gọi là *lý thuyết tập hợp Zermelo–Fraenkel*, hay *ZFC* (chữ *C* ở cuối là một câu chuyện riêng), một phiên bản lý thuyết tập hợp không có nghịch lý. ZFC đã thành công và vẫn được dùng ngày nay, nhưng nó đánh đổi một trong những đặc điểm tốt nhất của tập hợp, đó là *sự đơn giản*.

Ta nói thế có nghĩa gì? Cách phát biểu ban đầu của lý thuyết tập hợp (ngày nay được gọi là lý thuyết tập hợp *ngây thơ*) chỉ dựa trên một quy tắc/tiên đề (khá mơ hồ): "Với một tính chất P cho trước, tồn tại một tập hợp chứa mọi đối tượng có tính chất ấy", nghĩa là bất kỳ nhóm đối tượng nào cũng có thể tạo thành một tập hợp.

![Lý thuyết tập hợp ngây thơ](../06_type/naive_sets.svg)

Ngược lại, ZFC được định nghĩa bằng nhiều tiên đề hơn (và hạn chế hơn), chẳng hạn *tiên đề cặp*, phát biểu rằng với hai tập hợp bất kỳ, tồn tại một tập hợp chứa chúng làm phần tử.

![Tiên đề cặp trong ZFC](../06_type/zfc_pairing.svg)

...hay *tiên đề hợp*, phát biểu rằng nếu có hai tập hợp thì bạn cũng có tập hợp chứa tất cả các phần tử của chúng.

![Tiên đề hợp trong ZFC](../06_type/zfc_union.svg)

Tổng cộng có khoảng 8 tiên đề như vậy (tùy phiên bản của lý thuyết). Chúng được lựa chọn để cho phép ta xây dựng mọi tập hợp thú vị, nhưng không thể xây dựng tập hợp chứa chính mình khét tiếng kia. Tuy nhiên, chấp nhận ZFC có nghĩa là chấp nhận rằng lý thuyết tập hợp không đơn giản và thẳng thắn như vẻ ngoài của nó.

Thật vậy, nó phức tạp hơn lý thuyết phạm trù, và phức tạp hơn lý thuyết khác mà ta sắp tìm hiểu...

### Giải quyết nghịch lý bằng kiểu


Trong khi Zermelo đang tinh chỉnh các tiên đề của lý thuyết tập hợp để tránh nghịch lý Russell, bản thân Russell lại chọn một con đường khác để giải quyết nghịch lý của mình: ông quyết định bỏ hẳn tập hợp và phát triển một khái niệm toán học hoàn toàn mới, không có nghịch lý *ngay từ thiết kế* -- một khái niệm mà bạn không cần vá víu bằng các tiên đề bổ sung để tránh những cấu trúc phi lôgic. Và thế là năm 1908, cùng năm Zermelo công bố phiên bản đầu tiên của ZFC, Russell đưa ra *lý thuyết kiểu* của mình.

Lý thuyết kiểu chẳng hề giống lý thuyết tập hợp, nhưng đồng thời cũng không hoàn toàn khác nó, bởi các khái niệm *kiểu* và *hạng tử* rõ ràng gợi nhớ đến các khái niệm *tập hợp* và *phần tử*.

|Lý thuyết |Lý thuyết tập hợp| Lý thuyết kiểu|
|------ | ---------| --------|
|    | Phần tử     | Hạng tử       |
|Thuộc về một | Tập hợp     | Kiểu       |
|Ký hiệu | $a \in A$ |  $a : A$  | 

Khác biệt lớn nhất giữa hai lý thuyết về mặt *cấu trúc* là các hạng tử gắn chặt với kiểu của mình.

Vậy, trong khi ở lý thuyết tập hợp, một phần tử có thể thuộc nhiều tập hợp

![Một tập hợp và một tập con](../06_type/set_subset.svg)

Trong lý thuyết kiểu, một hạng tử chỉ có thể có một kiểu. (Lưu ý rằng quả bóng đỏ trong vòng tròn nhỏ khác với quả bóng đỏ trong vòng tròn lớn hơn)

![Một kiểu và một kiểu con](../06_type/type_subtype.svg)

Do luật này, kiểu không thể chứa chính mình, nên nghịch lý Russell được tránh hoàn toàn.

Luật ấy có thể nghe lạ; chẳng hạn, vì một hạng tử chỉ có thể thuộc một kiểu, trong lý thuyết kiểu, số tự nhiên 1 được ký hiệu là $1: \mathbb{N}$ và là một đối tượng hoàn toàn riêng biệt với số nguyên 1 (ký hiệu là $1: \mathbb{Z}$)

![Một tập hợp và một tập con](../06_type/int_nat_type.svg)

Điều này chỉ bắt đầu có lý khi ta nhận ra rằng luôn có thể chuyển một phiên bản của giá trị sang phiên bản kia bằng hàm ảnh mà ta đã học ở chương đầu tiên.

![Một tập hợp và một tập con](../06_type/int_nat_type_function.svg)

Như bạn sẽ sớm thấy, khái niệm kiểu liên quan rất nhiều đến khái niệm hàm.

## Lý thuyết kiểu là gì

> "Mọi hàm mệnh đề φ(x)—người ta cho rằng như vậy—ngoài miền đúng còn có một miền có nghĩa, tức là một miền mà x phải nằm trong đó để φ(x) có thể là một mệnh đề, dù đúng hay sai. Đây là điểm thứ nhất trong lý thuyết kiểu; điểm thứ hai là các miền có nghĩa tạo thành các kiểu, tức là nếu x thuộc miền có nghĩa của φ(x), thì có một lớp đối tượng, *kiểu* của x, mà tất cả đều phải thuộc miền có nghĩa của φ(x)" --- Bertrand Russell - Principles of Mathematics

Trong mục trước, ta suýt rơi vào cái bẫy giải thích kiểu là thứ "giống tập hợp, nhưng..." (chẳng hạn giống tập hợp, nhưng một hạng tử chỉ có thể thuộc một kiểu). Tuy điều ấy có thể đúng về mặt kỹ thuật, những giải thích như vậy hoàn toàn không thích hợp, bởi dù kiểu khởi đầu là một lựa chọn thay thế cho tập hợp, rốt cuộc chúng lại trở nên khá khác biệt. Vì thế, suy nghĩ bằng tập hợp không đưa bạn đi xa được. Thật vậy, nếu lấy nhà lý thuyết tập hợp điển hình trong mục trước và hỏi về kiểu, câu trả lời thành thật của họ phải là:

> "Bạn đã thấy tập hợp chưa? À, nó chẳng liên quan gì đến thứ đó."

Vậy hãy xem ta định nghĩa một lý thuyết kiểu theo cách riêng của nó như thế nào.

Nhưng trước hết...

### Lời lưu ý dài

Trước khi bắt đầu, hãy nói cho xong lời lưu ý dài này:

Lưu ý rằng trong câu vừa rồi, ta nói *một* lý thuyết kiểu, chứ không phải "lý thuyết kiểu" hay "lý thuyết kiểu ấy". Đó là vì không chỉ có một mà có nhiều cách phát biểu lý thuyết kiểu khác nhau (dù có liên hệ), được gọi một cách dễ gây nhầm lẫn là các *lý thuyết* kiểu (và ít gây nhầm lẫn hơn là các *hệ kiểu*), chẳng hạn *phép tính lambda có kiểu đơn giản* hay *phép tính lambda đa hình*. Vì thế, nói đến *một* lý thuyết kiểu là hợp lý.

Tôi đã làm bạn đủ rối chưa? Chưa sao?

Trong một số ngữ cảnh, thuật ngữ "lý thuyết kiểu" (không đếm được) chỉ toàn bộ lĩnh vực nghiên cứu các lý thuyết kiểu, giống như lý thuyết phạm trù là nghiên cứu các phạm trù. Nhưng (hãy hít sâu) đôi khi bạn có thể xem các hệ kiểu khác nhau là "những phiên bản khác nhau của lý thuyết kiểu", nên khi nói về một tập hợp đặc điểm chung của mọi hệ kiểu, người ta đôi khi dùng thuật ngữ "lý thuyết kiểu" để chỉ một hệ kiểu bất kỳ có những đặc điểm ấy.

### Kiểu là gì?

Dù sao, hãy trở lại với chủ đề của chúng ta (dù muốn gọi nó thế nào). Như đã nói, lý thuyết kiểu ra đời từ việc Russell tìm một cách định nghĩa mọi họ đối tượng *thú vị*, mà không vô tình định nghĩa những họ dẫn ta lạc đường (chẳng hạn đến nghịch lý mang tên ông), và không phải đặt ra vô số tiên đề bổ sung (kiểu như ZFC).

Ông đã suy nghĩ rất nhiều (ít nhất tôi hình dung như vậy) và xây dựng được một hệ hình thức đáp ứng tất cả các tiêu chí ấy, dựa trên một ý tưởng mới mang tính cách mạng... mà về cơ bản lại chính là ý tưởng cốt lõi của lý thuyết phạm trù (tôi không biết vì sao ông chưa bao giờ được ghi nhận là người tiên phong của lý thuyết phạm trù). Ý tưởng ấy như sau: các họ *thú vị*, những họ mà ngay từ đầu ta muốn nói đến, là *các họ làm nguồn và đích của hàm*. Vậy ta có thể nói.

{: .definition}

> Một kiểu là một thứ có thể là nguồn và/hoặc đích của một mũi tên.

(Để định nghĩa tổng quát hơn, ta dùng thuật ngữ tổng quát hơn --- "mũi tên", nhưng hiện giờ bạn có thể xem các mũi tên như hàm.)

Hãy nghĩ lại về tập hợp tất cả các tập hợp không chứa chính mình. Ngoài việc gây ra nghịch lý Russell, tập hợp này khá vô dụng (trừ khi ta coi gây ra nghịch lý là hữu dụng). Và nếu tìm hiểu kỹ, cuối cùng ta sẽ thấy vì sao: không có hàm (thú vị) nào từ bất kỳ tập hợp nào khác đến tập hợp này, nên *ta không thể đi đến nó* từ đâu cả. Và ngược lại, từ nó ta cũng không thể đi đâu (cũng không có hàm nào lấy nó làm nguồn). Tập hợp này giống một ốc đảo giữa sa mạc... hay có lẽ là một sa mạc nhỏ giữa một ốc đảo lớn... Hãy liên hệ với tôi nếu bạn nghĩ ra phép ẩn dụ nào hay.

<!--

![
THE STUDIO 
JENCEL
A set without functions is just a dead end
ALYSSA
Even worse, as a dead end is at least reachable.
](../comic/02.svg){: .comic-web-panel }

-->

### Xây dựng kiểu

Ta đã thấy lý thuyết kiểu không khác lý thuyết tập hợp nhiều về *cấu trúc mà nó tạo ra* --- mọi kiểu (ít nhất ở cấp đầu tiên) đều là tập hợp, dù không phải mọi tập hợp đều là kiểu. Và mọi hàm đều là... à, hàm. Tuy nhiên, lý thuyết kiểu rất khác lý thuyết tập hợp về *cách cấu trúc xuất hiện*, giống như cách tiếp cận trực giác đối với lôgic khác với cách tiếp cận cổ điển (nhân tiện, nếu phép ẩn dụ này khiến mối liên hệ giữa lý thuyết kiểu và lôgic trực giác trở nên quá hiển nhiên với bạn, hãy giúp tôi một việc: đừng nhắc đến nó, và hãy tỏ ra ngạc nhiên khi ta nói rõ điều đó).

Trong lý thuyết tập hợp (nhất là phiên bản ngây thơ), mọi tập hợp và hàm có thể có đều *đã hiện diện ngay từ đầu*, như thế giới các ý niệm của Plato. Việc ta làm chỉ là khám phá những thứ mình quan tâm.

![Tập hợp và hàm trong lý thuyết tập hợp](../06_type/set_theory_functions.svg)

Trong lý thuyết kiểu, ta bắt đầu với một không gian trống.

*[lược bỏ sơ đồ]*

Từ đó, ta phải xây dựng các kiểu. Từng kiểu một. Bằng tay không (được rồi, ta có vài công cụ toán học khá hay để hỗ trợ).

### Hình thành kiểu, đưa vào hạng tử, loại bỏ hạng tử

> "Nói chung, ta có thể xem dữ liệu được định nghĩa bởi một họ các bộ chọn và hàm tạo, cùng những điều kiện cụ thể mà các thủ tục ấy phải đáp ứng để là một biểu diễn hợp lệ." --- Harold Abelson, Gerald Jay Sussman, Julie Sussman --- Structure and Interpretation of Computer Programs

Trước khi giới thiệu những công thức cụ thể để xây dựng kiểu, tôi muốn giải thích thêm ý tưởng chung. Trong mục trước, ta nói một kiểu là thứ có thể làm nguồn và/hoặc đích của một mũi tên. Định nghĩa này có vẻ hơi mơ hồ, nhưng sẽ rất đơn giản khi ta nhìn cách định nghĩa kiểu trong lập trình máy tính. Ngay cả qua lăng kính các ngôn ngữ mệnh lệnh truyền thống, cũng rõ rằng định nghĩa một kiểu gồm định nghĩa các quy tắc để xây dựng hàm (và tổng quát hơn là mũi tên).

```
class MyType<A> {

  a: A;
  constructor(a) {
    this.a = a;
  }

  getA() {
    return this.a;
  }

}
```

Những quy tắc nào? Ta có thể chia chúng thành ba nhóm.

Trước hết, một kiểu phải có một *định nghĩa* chỉ rõ nó là gì. Lưu ý rằng mũi tên này khác với thứ ta thường xem là mũi tên --- nó không phải mũi tên ở cấp giá trị (đi từ kiểu này đến kiểu khác), mà là mũi tên ở cấp kiểu (từ phạm trù kiểu này đến phạm trù kiểu khác). Đây được gọi là một *quy tắc hình thành kiểu*.

![Một kiểu được biểu diễn bằng một quả bóng](../06_type/rule_type_formation.svg)

Tiếp theo, một kiểu phải có ít nhất một mũi tên trỏ đến kiểu mới. Đây được gọi là một *quy tắc đưa vào hạng tử* ("hạng tử" là từ để chỉ "giá trị").
Trong lập trình, nó được gọi là *hàm tạo*, và là mũi tên ở cấp giá trị (chẳng hạn một hàm).

![Một kiểu và một mũi tên trỏ đến nó](../06_type/rule_term_introduction.svg)

Cuối cùng, vì không muốn xây dựng kiểu chỉ để có thêm kiểu mới, một kiểu phải có ít nhất một mũi tên đi *từ* kiểu mới này. Đây là mũi tên ở cấp giá trị (hàm), gọi là một *quy tắc loại bỏ hạng tử* (như thể ta loại bỏ kiểu bằng cách thay nó bằng kết quả của phương thức).

![Một kiểu và một mũi tên đi từ nó](../06_type/rule_term_elimination.svg)

Tóm lại

{: .definition}

>Một kiểu được định nghĩa bằng cách định nghĩa ba mũi tên này:
>1. Một mũi tên ở cấp kiểu (hình thành kiểu).
>2. Ít nhất một mũi tên ở cấp giá trị lấy kiểu làm đích (đưa vào hạng tử).
>3. Ít nhất một mũi tên ở cấp giá trị lấy nó làm nguồn (loại bỏ hạng tử).

Được rồi, tôi nghĩ ta đã đi quá xa trong việc cố định nghĩa lý thuyết kiểu mà chưa thực sự định nghĩa lý thuyết kiểu, nên ta sẽ chuyển sang các công thức... sau lời lưu ý dài thứ hai.

### Chọn một lý thuyết (một lời lưu ý dài nữa)

Như đã nói trong lời lưu ý dài thứ nhất, không chỉ có một mà có nhiều lý thuyết kiểu. Vậy nếu muốn làm lý thuyết kiểu, trước hết ta phải chọn *một* lý thuyết kiểu (nếu câu này khiến bạn rối, hãy đọc lại lời lưu ý thứ nhất).

Chọn một lý thuyết kiểu (hay cứ gọi là hệ kiểu) còn bao gồm chọn một *ngôn ngữ* để mô tả lý thuyết ấy. Khi nghe nói đến ngôn ngữ, các lập trình viên có lẽ sẽ nghĩ đến những ngôn ngữ lập trình phổ biến, nhiều tính năng như TypeScript hay Java. Ngược lại, *các nhà lý thuyết kiểu* có sở thích khác --- vì quan tâm đến hệ kiểu chứ không phải ngôn ngữ, họ không thực sự quan tâm đến tính năng, nên ngôn ngữ được đa số lựa chọn là ngôn ngữ đơn giản nhất, tối giản nhất có thể tồn tại, tức là *phép tính lambda*. Nếu bạn chưa nghe về nó, đây là một ngôn ngữ chỉ có các hàm (vô danh) và không có gì khác.

Để làm vừa lòng cả hai bên (và đồng thời làm cả hai khó chịu), ta sẽ chọn một ngôn ngữ ở khoảng giữa --- tức là (một tập con của) *Haskell*. Về lý thuyết, điều này không tạo ra khác biệt lớn vì Haskell dựa trên phép tính lambda, nhưng sẽ giúp các lập trình viên thấy dễ hơn: khác với phép tính lambda chỉ có hàm, Haskell hỗ trợ định nghĩa các hàm tạo tích như một thành phần nguyên thủy (bản thân điều này không tạo ra khác biệt về mặt hình thức, vì ta có thể dễ dàng chuyển từ tích sang hàm bằng currying và uncurrying).

Ngoài ra, cuối cùng nhưng không kém phần quan trọng, các hàm tạo và hàm của Haskell có thể có tên (tin tôi đi, điều này có ích).

Vì chọn Haskell, ta sẽ làm việc trong lý thuyết kiểu/hệ kiểu của Haskell. Đây là một hệ kiểu do Jean-Yves Girard phát hiện năm 1972, gọi là *phép tính lambda đa hình* hay *System F*.

### Kiểu Unit

Ta bắt đầu với một không gian trống, chưa có gì được định nghĩa ngoài kiểu đơn phần tử, được gọi là kiểu $Unit$ trong Haskell.

![Một sơ đồ trống, chỉ chứa kiểu đơn vị](../06_type/unit_type.svg)

Một kiểu chỉ có một giá trị mà ta có thể dùng làm điểm xuất phát.

{: .definition}

> Kiểu $Unit$ ($1$) là kiểu có một giá trị.

### Kiểu Lambda

Thực ra còn một điều kiện tiên quyết nữa không dễ giải thích: đó là *kiểu mũi tên* cho mỗi cặp đối tượng, được gọi là các kiểu *Lambda*. Trong phép tính lambda, các mũi tên giữa những kiểu cũng là kiểu (một tính năng đôi khi được gọi là "hàm hạng nhất" trong ngữ cảnh lập trình).

{: .definition}

> Với hai kiểu $A$ và $B$ bất kỳ, có một kiểu $A \to B$, gọi là kiểu *Lambda* của $A$ và $B$, có các giá trị là tất cả những mũi tên nối $A$ và $B$.

Ở đây ta sẽ không đi vào chi tiết hơn, vì kiểu Lambda được định nghĩa và hoạt động giống đối tượng kéo theo trong lôgic trực giác đã định nghĩa ở chương trước. Như bạn sẽ biết, nó cũng có cùng vai trò.

## Kiểu cơ sở. Kiểu Boolean

Khi đã có điểm xuất phát, ta có thể định nghĩa một số kiểu. Nhưng bằng cách nào? Hãy bắt đầu với các kiểu cơ sở, như *Boolean*. Với chúng, quá trình khá đơn giản vì ta có thể *liệt kê thẳng các giá trị*.

{: .definition}
$$
\begin{aligned}
\mathrm{Bool} &:\ \mathrm{Type} \\
\mathrm{True} &:\ \mathrm{Bool} \\
\mathrm{False} &:\ \mathrm{Bool}
\end{aligned}
$$

Hãy lần lượt xem định nghĩa này:

### Hình thành kiểu

Trước hết, $Bool: Type$ nói rằng tồn tại một kiểu mà ta gọi là "Bool".

![Kiểu Boolean chưa có giá trị --- một vòng tròn trống](../06_type/bool_type_empty.svg)


### Đưa vào hạng tử

Sau đó, $True : Bool$ nói rằng "$True$ là một giá trị Boolean", nghĩa là thêm một giá trị vào kiểu dữ liệu vừa tạo này. Trong sơ đồ, ta sẽ biểu diễn điều ấy bằng một mũi tên từ kiểu đơn phần tử, được gọi là kiểu $Unit$ trong Haskell, theo Lý thuyết sơ cấp về phạm trù các tập hợp ở chương 2.

![ Kiểu Boolean có một giá trị: một vòng tròn có một quả bóng --- True](../06_type/bool_type_true.svg)

Và $False : Bool$ tạo ra một giá trị khác như vậy.

![Kiểu Boolean đầy đủ: một vòng tròn có hai quả bóng True và False](../06_type/bool_type_full.svg)

Thế là xong, ta vừa định nghĩa một kiểu!

### Loại bỏ hạng tử

Khoan đã, xóa câu đó đi. Thực ra ta chưa định nghĩa một kiểu. Hay đúng hơn là đã định nghĩa một kiểu, nhưng nó khá vô dụng. Bởi nó chỉ hữu ích khi ta định nghĩa ít nhất một mũi tên đi *từ* nó (nếu không, nó chỉ là con đường một chiều). Với các giá trị Boolean, hàm này thường được gọi là $ifElse$.

{: .definition}

$$
\begin{aligned}
\mathrm{ifElse} : \forall a.\ \mathrm{Bool} \to a \to a \to a \\
\mathrm{ifElse}\ True\ a\ b\ =\ a\\
\mathrm{ifElse}\ False\ a\ b\ =\ b 
\end{aligned}
$$

Bạn có thể thấy định nghĩa hàm trong Haskell khá sơ khai --- ta chỉ ánh xạ từng giá trị riêng của kiểu này đến giá trị của kiểu khác.

Dưới đây là một vài biểu thức dùng hàm ấy, kèm chỉ dẫn về kết quả trả về (`--` là cú pháp chú thích của Haskell)

```haskell
ifElse True 1 2 --1
ifElse False 1 2 --2
```

### Đẳng cấu giữa các kiểu

Nhưng vì sao (có nguy cơ lại lặp lời mình) chính kiểu này phải là kiểu Boolean? Điều gì ngăn đồng nghiệp Bobby, người luôn muốn làm mọi thứ theo cách riêng, định nghĩa một phiên bản Boolean của riêng mình rồi dùng nó trong dự án?

{: .definition}

$$
\begin{aligned}
\mathrm{BobbysBool} &:\ \mathrm{Type} \\
\mathrm{BobbysTrue} &:\ \mathrm{BobbysBool} \\
\mathrm{BobbysFalse} &:\ \mathrm{BobbysBool}
\end{aligned}
$$

Câu trả lời là "không có gì". Nhưng chuyện đó chẳng nghiêm trọng --- ta có thể nhanh chóng viết một hàm chuyển Bool của họ sang Bool của ta:

{: .definition}

$$
\begin{aligned}
convert\ BobbysBool &\to Bool \\
convert\ BobbysTrue\ &=\ True \\
convert\ BobbysFalse\ &=\ False 
\end{aligned}
$$

Hàm này cũng có thể đảo ngược. Điều đó có nghĩa hai kiểu đẳng cấu, tức là chúng là cùng một kiểu, *sai khác một đẳng cấu (duy nhất)*.


### Những kiểu cơ sở khác

Suýt quên: theo cùng cách ta đã xây dựng kiểu Boolean, ta cũng có thể xây dựng bất kỳ kiểu hữu hạn/cơ sở nào khác, như kiểu các quả bóng.

{: .definition}

$$
\begin{aligned}
\mathrm{Ball} &:\ \mathrm{Type} \\
\mathrm{OrangeBall} &:\ \mathrm{Ball} \\
\mathrm{RedBall} &:\ \mathrm{Ball} \\
\mathrm{YellowBall} &:\ \mathrm{Ball} 
\end{aligned}
$$

![Kiểu các quả bóng: một vòng tròn có vài quả bóng nhiều màu](../06_type/balls_construct.svg)

## Kiểu đa hình. Kiểu Maybe

Bây giờ, ta sẽ định nghĩa kiểu được gọi trong Haskell là $Maybe$ (và trong các ngôn ngữ khác thường gọi là $Option$). Nếu bạn chưa gặp nó, tài liệu Haskell có một mô tả rất hay:

>Kiểu Maybe đóng gói một giá trị có thể có hoặc không. Một giá trị thuộc kiểu Maybe a hoặc chứa một giá trị thuộc kiểu a (biểu diễn là $Just[a]$), hoặc rỗng (biểu diễn là $Nothing$). Dùng $Maybe$ là cách hay để xử lý lỗi hay trường hợp ngoại lệ mà không phải dùng đến biện pháp mạnh như error.

Nhưng một khi học được cách đọc, bản thân định nghĩa kiểu đã đủ rõ:

{: .definition}

$$
\begin{aligned}
\mathrm{Maybe} &:\ \mathrm{Type} \to \mathrm{Type} \\
\mathrm{Nothing} &:\ \forall a.\ \mathrm{Maybe}[a] \\
\mathrm{Just} &:\ \forall a.\ a \to \mathrm{Maybe}[a]
\end{aligned}
$$

### Hình thành kiểu

$Maybe$ khá giống $Bool$, nhưng khác với $Bool$, $Maybe$ là kiểu *đa hình*, như ta thấy khi nhìn vào *quy tắc hình thành kiểu*

{: .definition}

$$
\mathrm{Maybe} :\ \mathrm{Type} \to \mathrm{Type} 
$$

Maybe là đa hình, nghĩa là không chỉ có một $Maybe$ mà có nhiều $Maybe$ --- một cho mỗi kiểu `a` . Các kiểu đa hình là những mũi tên từ vũ trụ kiểu đến chính nó.

![Kiểu `Maybe` chưa có giá trị --- Một hàm trên vũ trụ kiểu, nối `Bool` và `Nat` với các vòng tròn trống `Maybe Bool` và `Maybe Nat`.](../06_type/list_type_empty.svg)

Đó là vì sao loại của $Maybe$ là $Type \to Type$, còn $Bool$ chỉ là một $Type$.

Hãy lấy riêng kiểu $Bool$ làm ví dụ. Áp dụng nó vào mũi tên ở cấp kiểu, ta thu được

{: .definition}

$$
\mathrm{MaybeBool} :\ \mathrm{Type} 
$$

Nghĩa là vì $Bool$ là một kiểu, $Maybe[Bool]$ cũng là một kiểu.

![Kiểu `Maybe Boolean` chưa có giá trị --- Một hàm trên vũ trụ kiểu, nối vòng tròn Bool với một vòng tròn trống mới.](../06_type/maybe_type_empty.svg)

### Đưa vào hạng tử: Nothing

Bây giờ là lúc điền vào kiểu của chúng ta.

Dòng thứ nhất là

{: .definition}

$$
\mathrm{Nothing} :\ \forall a.\ \mathrm{Maybe}[a]
$$

Hay nếu lấy $a$ là $Bool$, thì đơn giản là:

{: .definition}

$$
\mathrm{Nothing} :\ \mathrm{Maybe}[Bool]
$$


Nó nói rằng có một giá trị gọi là $Nothing$ cho mọi kiểu $Maybe$ (đó là ý nghĩa của $\forall$ -- "với mọi").

![Kiểu `Maybe Boolean` chưa có giá trị: Một hàm trên vũ trụ kiểu, nối vòng tròn Bool với một vòng tròn trống mới.](../06_type/maybe_type_nothing.svg)


### Đưa vào hạng tử: Just

Tất nhiên, sẽ chẳng có ích gì khi có nhiều $Maybe$ nếu tất cả đều giống nhau. Đó là lúc cần đến dòng thứ hai.

{: .definition}

$$
\mathrm{Just} :\ \forall a.\ a \to \mathrm{Maybe}[a]
$$

hay với các giá trị Boolean


{: .definition}

$$
\mathrm{Just} :\ Bool \to \mathrm{Maybe}[Bool]
$$


Hàm tạo $Just$ biểu thị một mũi tên từ kiểu $a$ đến kiểu $Maybe[a]$, chẳng hạn từ $Boolean$ đến $Maybe[Boolean]$.

![Kiểu $Maybe Boolean$ chưa có giá trị: Một hàm trên vũ trụ kiểu, nối vòng tròn Bool với một vòng tròn trống mới.](../06_type/maybe_type_full.svg)

### Dùng Maybe

Kiểu $Maybe$ được dùng để xử lý lỗi, tức là để định nghĩa *hàm bộ phận*. Giả sử ta muốn định nghĩa một hàm không có mũi tên cho mọi giá trị trong nguồn. Điều đó có nghĩa hàm này không thể được định nghĩa sao?

![Một hàm bộ phận từ  $Nat$ đến $Boolean$: trả về False cho hợp số, True cho số nguyên tố và không được định nghĩa với 0 và 1](../06_type/isprime_int_bool.svg)

Không, ta chỉ cần bọc kiểu đích trong $Maybe$, và nó trở thành một hàm thông thường.

![Một hàm từ  $Nat$ đến $Maybe Boolean$: trả về $Just False$ cho hợp số, $Just True$ cho số nguyên tố và $Nothing$ cho 0 và 1](../06_type/isprime_int_maybe_bool.svg)

### Loại bỏ hạng tử

Để hoàn tất, ta định nghĩa một hàm để phân giải/loại bỏ kiểu maybe, tức là chuyển nó sang thứ khác bằng một hàm chuyển đổi kiểu nền của nó.

{: .definition}

$$
\begin{aligned}
maybe : \forall\ a\ b.\ b\ \to (a \to b) \to Maybe[a] &\to b \\
maybe\ n\ f\ Nothing\ &=\ n \\
maybe\ n\ f\ Just[x]\ &=\ f\ x 
\end{aligned}
$$

Lưu ý rằng hàm này định nghĩa một mũi tên từ kiểu $Maybe[a]$ đến bất kỳ kiểu $b$ nào, với điều kiện có một hàm $a \to b$ và một giá trị của $b$.

## Kiểu quy nạp. Kiểu số tự nhiên.

Ban đầu, học toán có thể khiến bạn choáng ngợp: có lẽ bạn không biết tiến bước thế nào trước khối kiến thức đồ sộ, thậm chí vô hạn như vậy. Nhưng hóa ra câu trả lời rất đơn giản: lúc đầu bạn biết 0 điều. Sau đó, bạn học 1 lý thuyết -- chúc mừng, bạn đã học lý thuyết đầu tiên, và như vậy sẽ biết tổng cộng 1 lý thuyết. Rồi bạn học thêm 1 lý thuyết, và đã biết tổng cộng 2 lý thuyết. Rồi học thêm 1 lý thuyết nữa, rồi thêm 1 nữa, và với đủ thời gian cùng sự tận tâm, bạn có thể học hết các lý thuyết.

Lập luận này không chỉ áp dụng cho các lý thuyết toán học mà còn cho mọi thứ khác có thể gọi là "đếm được". Đó là vì nó là cơ sở của định nghĩa toán học về số tự nhiên, được nhà toán học Ý Giuseppe Peano tổng hợp nổi tiếng vào thế kỷ 19

<!--TODO (There are some laws as well, but we will cover them later). -->

1. $0$ là một số tự nhiên.
2. Nếu $n$ là một số tự nhiên, $n+1$ là một số tự nhiên.

Hay như những người dùng Haskell nói:

{: .definition}

$$
\begin{aligned}
\mathbb{N} &:\ \mathrm{Type} \\
\mathrm{Zero} &:\ \mathbb{N} \\
\mathrm{Succ} &:\ \mathbb{N} \to \mathbb{N}
\end{aligned}
$$

Hãy đi theo các mũi tên.

### Hình thành kiểu

Dòng thứ nhất chỉ ra rằng kiểu số tự nhiên là một kiểu thông thường, không đa hình, hay "đơn hình".

{: .definition}

$$
\mathbb{N} :\ \mathrm{Type}
$$

![Kiểu số tự nhiên chưa có giá trị --- một vòng tròn trống](../06_type/nat_type_empty.svg)

### Đưa vào hạng tử: Zero

Quy tắc thứ nhất cũng rất đơn giản.

{: .definition}

$$
\mathrm{Zero} :\ \mathbb{N}
$$

Nó cho phép ta tạo một giá trị gọi là không


![Kiểu số tự nhiên đã thêm Zero --- một vòng tròn chứa một quả bóng - "0"](../06_type/nat_type_zero.svg)

Nghĩa là đây là sự lặp lại *từng chữ* tiên đề thứ nhất của Peano.

> 1. $0$ là một số tự nhiên.

### Đưa vào hạng tử: Số liền sau

Quy tắc thứ hai thú vị hơn.

{: .definition}

$$
\mathrm{Succ} :\ \mathbb{N} \to \mathbb{N}
$$

Nó nói rằng có một hàm tạo gọi là "Số liền sau", $Succ$ (hay `+1`, như cách ta gọi), tức là tương đương với

> 2. Nếu $n$ là một số tự nhiên, $n+1$ là một số tự nhiên.

$Succ$ là một mũi tên từ kiểu số tự nhiên đến chính nó, nghĩa là với một số tự nhiên cho trước, $Succ$ tạo ra một số tự nhiên khác.

Nhưng hiện giờ ta chỉ có một hạng tử (giá trị) của kiểu số tự nhiên: $Zero$. Ta vẽ mũi tên $Succ$ và tạo ra một hạng tử khác, $Succ\ Zero$ (trong một số ngữ cảnh được gọi là $1$.

![Hàm số liền sau của kiểu số tự nhiên --- 0 trỏ đến s(0)](../06_type/nat_type_one_double_diagram.svg)

Và giờ ta có thêm một giá trị, nên phải vẽ thêm một mũi tên $Succ$. Lần này, kết quả là $Succ\ Succ\ Zero$, tức là hai.

![Hàm số liền sau của kiểu số tự nhiên --- 0 trỏ đến s(0), s(0) trỏ đến s(s(0))](../06_type/nat_type_two_double_diagram.svg)

Và ta cứ tiếp tục như vậy, *đến vô tận*, tạo ra một chuỗi giá trị không có điểm kết thúc.

![Kiểu số tự nhiên: 0, s(0), s(s(0)), s(s(s(0))), v.v.](../06_type/nat_type_full.svg)

Hừm, ký hiệu này hơi cồng kềnh; giá mà có cách biểu diễn các giá trị như vậy tốt hơn... Ồ, khoan đã.

![Kiểu số tự nhiên: 0, 1, 2, 3, v.v.](../06_type/nat_type_full_normal.svg)

Và đó là cách bạn định nghĩa một kiểu *quy nạp* (hay cũng có thể gọi là kiểu *đệ quy*).

### Loại bỏ hạng tử

Khoan, còn các quy tắc loại bỏ nữa; tôi luôn quên các quy tắc loại bỏ, đây là chúng.


{: .definition}

$$
\begin{aligned}
foldNat : \mathbb{N} \to a \to (a \to a) &\to a\\
foldNat\ Zero\ z\ s\ &=\ z\\
foldNat\ (Succ\ a)\ z\ s\ &= s\ (foldNat\ a\ z\ s)
\end{aligned}
$$

Điều này cho phép ta, chẳng hạn, chuyển các `Nat` của mình sang các `Nat` thông thường của Haskell:

```haskell
foldNat (Succ (Succ Zero)) 0 (+ 1) -- 2
```

Bất kỳ hàm chính tắc nào khác chuyển số tự nhiên sang các kiểu khác cũng có thể được định nghĩa bằng quy tắc loại bỏ.

## Kiểu phức hợp. Kiểu danh sách.

Phong cảnh các kiểu sẽ thực sự là một nơi... bằng phẳng nếu không có *kiểu phức hợp*. Đó là những kiểu cho phép bạn kết hợp nhiều giá trị của các kiểu khác thành một.

Kiểu phức hợp tiêu biểu nhất là danh sách. Cụ thể, danh sách liên kết là một thứ đẹp đẽ:

{: .definition}

$$
\begin{aligned}
\mathrm{List} &:\ \mathrm{Type} \to \mathrm{Type} \\
\mathrm{Nil} &:\ \forall a.\ \mathrm{List}[a] \\
\mathrm{Cons} &:\ \forall a.\ a \to \mathrm{List}[a] \to \mathrm{List}[a]
\end{aligned}
$$

Hãy phân tích:

### Hình thành kiểu

Quy tắc hình thành kiểu cho ta biết $List$ (như $Maybe$) là một kiểu đa hình.

{: .definition}

$$
\mathrm{List} :\ \mathrm{Type} \to \mathrm{Type}
$$

Điều này có nghĩa không chỉ có một mà có nhiều kiểu $List$, như $List[Nat]$ $List[Bool]$, v.v. (vô hạn nếu xét danh sách các danh sách (các danh sách)). Chúng thường được đọc là "Danh sách các số tự nhiên", "Danh sách các giá trị Boolean", v.v.

![Các kiểu `List Nat` và `List Bool` chưa có giá trị --- Một hàm trên vũ trụ kiểu, nối `Bool` và `Nat` với các vòng tròn trống `List Bool` và `List Nat`.](../06_type/list_type_empty.svg)

### Đưa vào hạng tử: Nil

Bây giờ hãy xem các hàm tạo. Hàm tạo thứ nhất định nghĩa một giá trị tĩnh, một cho mỗi danh sách, biểu thị danh sách rỗng.


{: .definition}

$$
\mathrm{Nil} :\ \forall a.\ \mathrm{List}[a]
$$

![Kiểu `List Nat` chỉ có giá trị Nil --- Một vòng tròn với một quả bóng bên trong. Một mũi tên từ kiểu đơn vị trỏ đến giá trị ấy](../06_type/list_type_nil.svg)

Ta sẽ gọi giá trị này là $Nil$ (các danh sách có sẵn của Haskell dùng ký hiệu `[]`).

### Đưa vào hạng tử: Cons

Và giờ đến phần thú vị hơn: $Cons$, quy tắc đưa vào hạng tử thứ hai của chúng ta (nhân tiện, $Cons$ là viết tắt của construct), có thể được xem là phép toán thêm giá trị $a$ vào một danh sách (rồi trả về danh sách ấy).

{: .definition}

$$
\mathrm{Cons} :\ \forall a.\ a \to \mathrm{List}[a] \to \mathrm{List}[a]
$$

Thoạt nhìn, $Cons$ khá giống hàm tạo quy nạp $Succ$ mà ta đã thấy. Và quả thực, giống $Succ$, $Cons$ là một hàm tạo quy nạp/đệ quy sinh ra vô hạn hạng tử.

Tuy nhiên, khác với $Succ$ có chữ ký $X \to X$ (nghĩa là với mỗi $X$ có một giá trị khác), $Cons$ có chữ ký $a \to (X \to X)$ --- có một hàm tạo List cho *mỗi giá trị của kiểu* $a$. Ta có thể hình dung $Cons$ như một mũi tên trỏ đến một mũi tên khác.

![Hàm `Cons` --- Một mũi tên từ kiểu `Nat` trỏ đến kiểu các mũi tên từ kiểu danh sách đến chính nó: x -> (1,x), x -> (2,x), x -> (3,x), v.v. ](../06_type/list_type_cons_internal.svg)

Vì sao ta có thể có những mũi tên xuất phát từ những mũi tên khác? Có lẽ đây là lúc nhắc bạn rằng trong phép tính lambda, các mũi tên giữa các kiểu cũng là các kiểu.

Vậy hãy bắt đầu vẽ những mũi tên này, bắt đầu từ giá trị cơ sở $Nil$.

![Hàm `Cons` --- Một mũi tên từ kiểu `Nat` trỏ đến một mũi tên từ kiểu danh sách đến chính nó: 0 -> Nil -> (0,Nil), 1 -> Nil -> (1,Nil), v.v. ](../06_type/list_type_cons.svg)

Như đã nói, kiểu $List$ là quy nạp, nghĩa là mỗi mũi tên bạn vẽ lại sinh ra thêm các mũi tên (ở đây ta chỉ vẽ *một phần* trong số chúng (những mũi tên đi từ quả bóng cam)).

![Hàm `Cons` --- Một mũi tên từ kiểu `Nat` trỏ đến một mũi tên từ kiểu danh sách đến chính nó: 0 -> (1, Nil) -> (0, (1,Nil)), 1 -> (1, Nil) -> (1,(1,Nil)), v.v. ](../06_type/list_type_cons_2.svg)

Kết quả là một kiểu với các giá trị là... à, *danh sách* các giá trị khác,

### Loại bỏ hạng tử

Giờ hãy viết quy tắc loại bỏ hạng tử.

{: .definition}

$$
\begin{aligned}
foldList \ :\ (b \to a \to b) \to b \to List[a] &\to b \\
foldList\ f\ z Nil &= z\\
foldList\ f\ z (Cons\ x\ xs) &= foldList\ f\ (f\ z\ x)\ xs
\end{aligned}
$$

Quy tắc này cũng là hàm hữu ích nhất để thao tác với danh sách.

**Bài tập 1:** Có một ánh xạ từ $List$ đến $Boolean$ hữu ích đến mức một số phương ngữ Lisp hoàn toàn không có kiểu $Boolean$ và chỉ dựa vào ánh xạ này. Hãy vẽ nó.

![Kiểu danh sách: (Nil) (1,Nil), (1,(1,Nil)), (1,(1,Nil)), v.v. và kiểu `Boolean`: True và False với chỗ để vẽ các mũi tên từ List đến Bool](../06_type/list_bool_task.svg)

**Bài tập 2:** Định nghĩa ánh xạ này (giữa `List` và `Bool`) trong Haskell. Định nghĩa nó lần thứ nhất bằng cách tự viết một hàm từ đầu, và lần thứ hai bằng hàm `foldList`.

```haskell
f :: (Bool -> a -> Bool) 
f = undefined
foldList f False 
```

**Bài tập 3:** Tôi giới thiệu với bạn kiểu $List Unit$ (trong đó $Unit$ là kiểu đơn phần tử, (một kiểu có một giá trị). Hãy vẽ các giá trị của $List Unit$ cho đến khi hết chỗ.

![Kiểu danh sách chứa một giá trị (`Nil`), kiểu Unit (chứa một vòng tròn), với hàm `(Unit) -> Nil -> (Unit, Nil)`.](../06_type/list_unit_task.svg)

**Bài tập 4:** Kiểu $List Unit$ thực ra đẳng cấu với một kiểu khác mà ta đã xem ở đây. Hãy tìm xem đó là kiểu nào.

## Kiểu dương và kiểu âm. Either và các bộ.

Giờ ta sẽ giới thiệu nhanh thêm hai kiểu nữa (hừm... tôi có cảm giác thực ra đã thấy chúng rồi).

### Either

Kiểu $Either$ là một kiểu thú vị.

![Kiểu Either ](../06_type/either_type.svg)

Đây là một kiểu được tham số hóa bởi hai kiểu $a$ và $b$, và có hai hàm tạo/quy tắc đưa vào hạng tử --- một hàm tạo gọi là $Left$, nhận một giá trị của $a$. Và một hàm tạo khác gọi là $Right$, nhận một giá trị của $b$. Đây là định nghĩa Either (chưa gồm quy tắc loại bỏ hạng tử).


{: .definition}

$$
\begin{aligned}
\mathrm{Either} &:\ \mathrm{Type} \to \mathrm{Type} \to \mathrm{Type} \\
\mathrm{Left} &:\ \forall a\,b.\ a \to \mathrm{Either}[a\ b] \\
\mathrm{Right} &:\ \forall a\,b.\ b \to \mathrm{Either}[a\ b]
\end{aligned}
$$

### Tuple

Kiểu tiếp theo mà ta giới thiệu là kiểu $Tuple$, cũng được tham số hóa bởi $a$ và $b$, nhưng mỗi giá trị của nó chứa *cả* một giá trị của $a$ và một giá trị của $b$.

![Kiểu Tuple ](../06_type/tuple_type.svg)

Ở đây ta sẽ làm khác đi --- thay vì định nghĩa, ta sẽ trình bày trực tiếp các quy tắc loại bỏ kiểu.

{: .definition}

$$
\begin{aligned}
first\ :\ \forall\ a\ b. Tuple[a\ b] \to a \\
second\ :\ \forall\ a\ b. Tuple[a\ b] \to b
\end{aligned}
$$

**Bài tập 5:** Viết một hàm tạo của Tuple. Viết một hàm `fold` cho Either.

### Kiểu dương và kiểu âm

Kiểu $Either$ được xác định duy nhất bởi các quy tắc đưa vào của nó, nghĩa là có thể suy ra các quy tắc loại bỏ từ các quy tắc đưa vào.

{: .definition}

$$
\begin{aligned}
\mathrm{Left} &:\ \forall a\,b.\ a \to \mathrm{Either}[a\ b] \\
\mathrm{Right} &:\ \forall a\,b.\ b \to \mathrm{Either}[a\ b]
\end{aligned}
$$

Ngược lại, $Tuple$ được định nghĩa bằng các quy tắc loại bỏ, nghĩa là có thể suy ra các quy tắc đưa vào từ chúng:

{: .definition}

$$
\begin{aligned}
first\ :\ \forall\ a\ b. Tuple[a\ b] \to a \\
second\ :\ \forall\ a\ b. Tuple[a\ b] \to b
\end{aligned}
$$

Những kiểu như $Either$, được định nghĩa bằng các quy tắc đưa vào, được gọi là *kiểu dương*. Những kiểu được định nghĩa bằng sự loại bỏ là *âm*. Tất cả các kiểu mà ta đã thấy (ngoài $Tuple$) đều là dương.

Các kiểu dương và âm đối ngẫu với nhau.

Kiểu dương/âm tương ứng với các khái niệm phạm trù về giới hạn/đối giới hạn, nhưng ta sẽ tìm hiểu thêm về chúng sau.

**Bài tập 6:** Ngoài $Tuple$, còn một kiểu âm rất quan trọng mà ta đã tìm hiểu trong chương này (và ở nhiều nơi khác).

### Kết luận

Trong mục này, ta bắt đầu từ gần như không có gì --- chỉ có kiểu $Unit$. Sau đó, ta đã định nghĩa rất nhiều thứ, rất nhanh.

![Tất cả các kiểu ta đã thấy (cùng những tổ hợp): Unit, Bool, Maybe Bool, Nat, Maybe Nat, danh sách Nat, Bool hoặc Nat](../06_type/all_types.svg)

Có thể thấy vẫn còn thiếu một số kiểu mà các lập trình viên dùng, nhưng chúng có thể được định nghĩa theo cách tương tự những kiểu đã định nghĩa: chẳng hạn $char$ chỉ là một kiểu cơ sở, $string$ chỉ là $List[char]$, v.v.


## Mã hóa Church: Từ Haskell đến phép tính lambda

Trong mục trước, ta quả thực đã định nghĩa nhiều thứ rất nhanh, nhưng đã dựa vào các kiểu dữ liệu đại số tổng quát (GADT) của Haskell, và không hiển nhiên rằng có thể làm được những điều tương tự chỉ bằng hàm. Tuy nhiên, điều đó *có thể* làm được: có một cơ chế mã hóa mọi kiểu thành một hàm, gọi là *mã hóa Church*, theo tên người tạo ra phép tính lambda, Alonzo Church.

### Kiểu cơ sở. Kiểu Boolean

Hãy xét kiểu Boolean mà ta đã định nghĩa như sau:


{: .definition}

$$
\begin{aligned}
\mathrm{Bool} &:\ \mathrm{Type} \\
\mathrm{True} &:\ \mathrm{Bool} \\
\mathrm{False} &:\ \mathrm{Bool}
\end{aligned}
$$

Dưới đây là một phiên bản của cùng thứ đó, chỉ dùng các hàm.

{: .definition}

$$
\begin{aligned}
type\ \mathrm{Bool} &= \forall a. a \to a \to a \\
false &: \mathrm{Bool} \\
false\ a\ b &= b \\
true &: \mathrm{Bool} \\
true\ a\ b &= a 
\end{aligned}
$$

Ở đây, $Bool$ chỉ là cách viết tắt của hàm $\forall a. a \to a \to a $, nhận hai giá trị thuộc kiểu $a$ với mọi $a$ rồi trả về một giá trị khác. Theo định nghĩa này, ta có thể thấy $True$ là hàm trả về $a$ thứ nhất, còn $False$ là hàm trả về giá trị thứ hai.

Bạn không tin chúng có thể hoạt động như các giá trị Boolean sao? Đây là một cách cài đặt hàm $ifElse$:

{: .definition}

$$
\begin{aligned}
ifElse &: \forall a. \mathrm{Bool} \to a \to a \to a \\
ifElse &\ v\ a\ b\  = v\ a\ b 
\end{aligned}
$$

Cách cài đặt rất đơn giản vì chính kiểu dữ liệu đã làm công việc ấy. Đây là một trong những nguyên tắc chính đằng sau cái gọi là "mã hóa Church" của kiểu dữ liệu --- kiểu dữ liệu mã hóa quy tắc loại bỏ hạng tử.

Đây là cách bạn dùng nó:

```haskell
  ifElse true "True" "False" -- "True"
  ifElse false "True" "False" -- "False"
```



### Kiểu đa hình. Kiểu Maybe

Tất nhiên, kiểu Boolean là một kiểu cơ sở. Vậy hãy xét kiểu $Maybe$ phức tạp hơn:

{: .definition}

$$
\begin{aligned}
\mathrm{Maybe} &:\ \mathrm{Type} \to \mathrm{Type} \\
\mathrm{Nothing} &:\ \forall a.\ \mathrm{Maybe}[a] \\
\mathrm{Just} &:\ \forall a.\ a \to \mathrm{Maybe}[a]
\end{aligned}
$$

$Maybe$ phức tạp hơn vì nó có thể *chứa một giá trị khác* bên trong (với hàm tạo $Just$). Đây là lúc ta học một nguyên tắc quan trọng khác của mã hóa Church: dùng các hàm đã curry để giữ các giá trị.

{: .definition}

$$
\begin{aligned}
type\ Maybe[a] &= \forall m. m \to (a \to m) \to m \\
nothing &: Maybe[a] \\
nothing\ n\ j &= n \\
just &:\ a \to Maybe[a] \\
just\ val\ n\ j\ &= (j\ val) 
\end{aligned}
$$

### Nguyên tắc chung

Đến giờ, có lẽ bạn đã thấy mã hóa Church của kiểu có cùng các hàm tạo như kiểu "thông thường" --- khác biệt chỉ là nó nhận chúng làm tham số.

Nếu ta có một kiểu giống $Maybe$ nhưng chỉ có một giá trị (như kiểu $1$)...

{: .definition}

$$
\begin{aligned}
\mathrm{Nothing} &:\ \forall a.\ \mathrm{Maybe}[a] 
\end{aligned}
$$

...mã hóa Church của nó sẽ là...

{: .definition}

$$
\begin{aligned}
\forall m. m \to m 
\end{aligned}
$$

(Đây quả thực là mã hóa Church của kiểu $1$)

Rồi nếu mở rộng kiểu để có thêm hàm tạo $Just$...

{: .definition}

$$
\begin{aligned}
\mathrm{Nothing} &:\ \forall a.\ \mathrm{Maybe}[a] \\
\mathrm{Just} &:\ \forall a.\ a \to \mathrm{Maybe}[a]
\end{aligned}
$$

...mã hóa được mở rộng như sau...

{: .definition}
 
$$
\begin{aligned}
\forall m. m \to (a \to m) \to m 
\end{aligned}
$$

Đó là vì sao chữ ký của kiểu được mã hóa Church gần như giống hệt chữ ký của hàm $fold$ dùng để loại bỏ nó:

{: .definition}

$$
\begin{aligned}
foldMaybe &: \forall a\ m. m \to (a \to m) \to Maybe[a] \to m 
\end{aligned}
$$

và bản thân hàm $fold$ rất đơn giản. Nói chung, mã hóa Church của kiểu về cơ bản là một hàm $fold$ đã curry, một hàm nhận cùng đối số như các hàm "gấp" rồi cho ra cùng kết quả.

Nguyên tắc chung của mã hóa Church là một kiểu được đặc trưng hoàn toàn bởi những gì bạn có thể làm với nó; vì thế, thay vì cung cấp các hàm tạo cho kiểu rồi loại bỏ chúng bằng $fold$, ta đi thẳng đến $fold$.

**Bài tập 7:** Viết một phiên bản mã hóa Church của kiểu số tự nhiên

## Phép tính lambda đa hình - định nghĩa hình thức

Cho đến giờ, ta đã thấy phép tính lambda *hoạt động* như thế nào. Giờ ta sắp xem nó được định nghĩa một cách hình thức ra sao. Câu trả lời là, giống mọi hệ kiểu, nó được định nghĩa bằng *các quy tắc gán kiểu*. Vậy quy tắc gán kiểu là gì? Về cơ bản, chúng cũng là mũi tên. (Ngạc nhiên chưa?)

### Suy diễn tự nhiên

Đúng vậy, các quy tắc gán kiểu của Haskell quả thực là mũi tên, nhưng chúng được định nghĩa bằng một ngôn ngữ khác với Haskell, gọi là *suy diễn tự nhiên*. Suy diễn tự nhiên giống Haskell, nhưng dùng cú pháp trong đó tiền đề và kết luận được phân cách bằng một gạch ngang; chẳng hạn, thay vì...

$$
a \to b
$$

...ta viết...

$$\frac{a}{b}$$

Ngoài điều ấy, không có khác biệt lớn giữa suy diễn tự nhiên và Haskell. Chẳng hạn, hãy lấy kiểu Boolean. Ta đã định nghĩa nó trong Haskell như sau:
 
{: .definition}

$$
\begin{aligned}
\mathrm{Bool} &:\ \mathrm{Type} \\
\mathrm{True} &:\ \mathrm{Bool} \\
\mathrm{False} &:\ \mathrm{Bool}
\end{aligned}
$$

Nếu muốn định nghĩa nó bằng suy diễn tự nhiên, để nó là một trong những kiểu "nguyên thủy" thuộc chính hệ kiểu (như cách nó được định nghĩa trong hầu hết các ngôn ngữ lập trình), nó sẽ có dạng sau.

{: .definition}

$$\frac{}{\mathrm{Bool} :: \mathrm{Type}}$$

Điều này có nghĩa có một kiểu gọi là Bool (về mặt kỹ thuật, đây không phải quy tắc gán kiểu mà là quy tắc "gán loại" (và do đó có dấu hai chấm kép)).

{: .definition}
 
$$\frac{}{\mathrm{True} : \mathrm{Bool}}$$

{: .definition}

$$\frac{}{\mathrm{False} : \mathrm{Bool}}$$

$\mathrm{True}$ và $\mathrm{False}$ là các giá trị Boolean.

Ồ, tôi quên mất, trong suy diễn tự nhiên được phép có kết luận mà không có tiền đề.

**Bài tập 8:** Định nghĩa quy tắc loại bỏ cho các giá trị Boolean bằng suy diễn tự nhiên.

### Ngữ cảnh

Điều này có *quá* đơn giản không? Hãy thêm khái niệm *ngữ cảnh* gán kiểu (hay *môi trường* gán kiểu).

Chuyện là thế này: kiểu và biến phải được lưu *ở đâu đó*. Vậy với một loạt giá trị (chẳng hạn $x$, $y$, $z$, v.v.) và một loạt kiểu (chẳng hạn $A$, $B$, $C$, v.v.), ngữ cảnh là một *tập hợp* (ối, tôi lại làm thế rồi) gồm tất cả các biến và kiểu của chúng; chẳng hạn ${ (x, A), (y, B), (z, C)... }$.

Ta thường ký hiệu ngữ cảnh bằng chữ $\Gamma$, và dùng ký hiệu $\vdash$ để chỉ một điều suy ra từ ngữ cảnh ấy (ôi không, lại thêm một mũi tên nữa); chẳng hạn $\Gamma \vdash a : b$ có nghĩa trong ngữ cảnh $\Gamma$ có một biến $a$ mang kiểu $b$.).

Vậy khi xét đến ngữ cảnh, định nghĩa ở trên trở thành

{: .definition}

$$\frac{}{\Gamma \vdash \mathrm{Bool} :: \mathrm{Type}}$$

nghĩa là ngữ cảnh chứa kiểu $\mathrm{Bool}$

{: .definition}

$$\frac{}{\Gamma \vdash \mathrm{True} : \mathrm{Bool}}$$

nghĩa là ngữ cảnh chứa giá trị $\mathrm{True}$ thuộc kiểu $\mathrm{Bool}$

{: .definition}

$$\frac{}{\Gamma \vdash \mathrm{False} : \mathrm{Bool}}$$

nghĩa là ngữ cảnh chứa giá trị $\mathrm{False}$ thuộc kiểu $\mathrm{Bool}$

Như vậy, ta định nghĩa ngay kiểu Boolean là một phần của ngữ cảnh.

### Mũi tên ở cấp giá trị

Với những điều ấy, ta liệt kê các tiên đề của phép tính lambda, không chứa gì hơn ngoài định nghĩa kiểu của các mũi tên ở cấp giá trị (hàm).

Có một số quy tắc gán kiểu cần định nghĩa, bắt đầu với quy tắc đơn giản *Var*, phát biểu như sau: nếu trước đó ta đã nói $x$ có kiểu $A$, thì $x$ có kiểu $A$.

{: .definition}

> Quy tắc gán kiểu cho biến (Var)
>
>$$\frac{x : A \in \Gamma}{\Gamma \vdash x : A}$$

Giờ ta tiếp tục định nghĩa các kiểu của mũi tên.

Ta bắt đầu bằng quy tắc hình thành kiểu (hay quy tắc *gán loại*).

{: .definition}

> Quy tắc hình thành kiểu lambda
>
>$$\frac{\Gamma \vdash A :: Type, \Gamma \vdash B :: Type}{\Gamma \vdash A \to B :: Type}$$

Và sau đó là hai quy tắc gán kiểu. Một quy tắc là *đưa vào hạng tử* cho các hạng tử lambda, gọi là *trừu tượng hóa* (hay *Abs*).

{: .definition}

> Quy tắc đưa vào hạng tử lambda (Abs)
>
>$$\frac{\Gamma, x:A \vdash y: B}{\Gamma \vdash \lambda z : A \to B}$$

(Nghĩa là nếu có một cách từ giá trị $x$ thuộc kiểu $A$ thu được một giá trị $y$ thuộc kiểu $B$, thì ta có một hàm $A \to B$).

Và còn có loại bỏ hạng tử cho lambda, tức là *áp dụng* hàm (*App*).

{: .definition}

> Quy tắc loại bỏ hạng tử lambda (App)
>
>$$\frac{\Gamma \vdash z: A \to B, \Gamma \vdash x: A}{\Gamma \vdash z x : B }$$

Để hiểu các quy tắc ấy hoạt động như thế nào, hãy lấy hàm $length: string \to int$ làm ví dụ.

{: .definition}

> Đưa vào hạng tử "length"
>
>$$\frac{\Gamma, x:string \vdash y: int}{\Gamma \vdash \lambda length : string \to int}$$

{: .theorem}

> Áp dụng hạng tử "length"
>
> $$\frac{\Gamma \vdash length: string \to int, \Gamma \vdash x: string}{\Gamma \vdash length\ x : int }$$

Các quy tắc ấy là tất cả những gì bạn cần để định nghĩa các mũi tên ở cấp giá trị.

### Phép tính lambda có kiểu đơn giản

Những quy tắc vừa xem chưa định nghĩa phép tính lambda đa hình, mà định nghĩa một hệ kiểu đơn giản hơn, được gọi một cách thích hợp là *phép tính lambda có kiểu đơn giản*.

{: .definition}

> Hệ *phép tính lambda có kiểu đơn giản* (STLC) là hệ kiểu chỉ có một hàm tạo kiểu --- hàm (lambda), với các quy tắc gán kiểu *Abs* và *App* (để đưa vào và loại bỏ hạng tử). Nó còn có quy tắc gán kiểu *Var*.

### Tính đa hình

Phép tính lambda có kiểu đơn giản giống phép tính lambda đa hình, ngoại trừ việc... nó không đa hình, nghĩa là ta không thể định nghĩa các kiểu đa hình như $Maybe$.

{: .definition}

$$
\begin{aligned}
\mathrm{Maybe} &:\ \mathrm{Type} \to \mathrm{Type} \\
\mathrm{Nothing} &:\ \forall a.\ \mathrm{Maybe}[a] \\
\mathrm{Just} &:\ \forall a.\ a \to \mathrm{Maybe}[a]
\end{aligned}
$$

Điều tốt nhất ta có thể làm là định nghĩa những phiên bản riêng của kiểu, chẳng hạn một phiên bản chỉ dùng với $\mathrm{int}$.

{: .definition}

$$
\begin{aligned}
\mathrm{MaybeInt} &:\ \mathrm{Type} \\
\mathrm{NoInt} &:\ \mathrm{MaybeInt} \\
\mathrm{JustInt} &: \mathrm{int} \to \mathrm{MaybeInt}
\end{aligned}
$$

Và một phiên bản cho $\mathrm{string}$

{: .definition}

$$
\begin{aligned}
\mathrm{MaybeString} &:\ \mathrm{Type} \\
\mathrm{NoString} &:\ \mathrm{MaybeString} \\
\mathrm{JustString} &:\mathrm{string} \to \mathrm{MaybeString}
\end{aligned}
$$

Hơn nữa, trong STLC ta không thể định nghĩa *các hàm* dùng với $Maybe$ đa hình (bất kể kiểu chúng giữ), nên ta phải định nghĩa lại không chỉ các kiểu mà còn mọi hàm dùng chúng.

Để giải quyết vấn đề này và nâng mình từ phép tính lambda *có kiểu đơn giản* lên phép tính lambda *đa hình* (còn gọi là System F), ta định nghĩa các mũi tên ở cấp kiểu.

Nhưng thực ra, trước hết ta nên nói về loại...

### Loại

Trong biểu thức "$x: A$", "$A$" biểu thị kiểu của giá trị. Nhưng rồi $Type$ trong biểu thức "$A :: Type$" là gì? Ta không thể nói $Type$ là một *kiểu*, vì sẽ thấy Russell lấp ló sau lưng cùng nghịch lý mang tên ông. Trong phép tính lambda, điều này được giải quyết như sau:

* **Giá trị** có **kiểu** (được chú thích bằng dấu hai chấm đơn -- $:$)
* **Kiểu** có kiểu-của-kiểu, tức là **loại** (được chú thích bằng dấu hai chấm kép -- $::$.
* **Loại** có... Được rồi, hãy dừng ở đây đã...

Điều này có nghĩa ngoài hệ kiểu và các quy tắc gán kiểu, ta còn có một *hệ loại* và *các quy tắc gán loại*. Nhưng xin đừng ném cuốn sách này ra cửa sổ -- hệ gán loại cho cả STLC khá dễ định nghĩa: chỉ có một loại mà ta gọi là $\mathrm{Type}$ (đôi khi được ký hiệu bằng $*$).

{: .definition}

> Quy tắc gán loại trong STLC
>
> $$\frac{}{\Gamma \vdash Type}$$

Rồi các quy tắc định nghĩa kiểu được định nghĩa như sau (nghĩa là mọi thứ đều có loại $\mathrm{Type}$:

{: .theorem}

$$\frac{}{\Gamma \vdash \mathrm{Bool} :: \mathrm{Type}}$$

Còn với phép tính lambda đa hình, ta sẽ xem trong mục tiếp theo.

### Mũi tên ở cấp kiểu

Ta đã bắt đầu định nghĩa STLC bằng việc định nghĩa các *biến* ở cấp giá trị, dùng quy tắc gán kiểu đơn giản *Var*,

{: .definition}

> Quy tắc gán kiểu cho biến (Var)
>
>$$\frac{x : A \in \Gamma}{\Gamma \vdash x : A}$$

Trong phép tính lambda đa hình, ta còn có *biến ở cấp kiểu*, được định nghĩa bằng một quy tắc tương tự.

{: .definition}

> Quy tắc gán loại cho biến kiểu (TVar)
>
>$$\frac{A :: K \in \Gamma}{\Gamma \vdash A :: K}$$

Giờ hãy tiếp tục định nghĩa kiểu của chính các mũi tên.

Trong phép tính lambda đa hình, giống như trong STLC, ta có các mũi tên ở cấp giá trị chuyển giá trị thành những giá trị khác...

{: .definition}

>Quy tắc hình thành kiểu lambda
>
>$$\frac{\Gamma \vdash A :: Type, \Gamma \vdash B :: Type}{\Gamma \vdash A \to B :: Type}$$


Và ta còn có các mũi tên *ở cấp kiểu* chuyển kiểu thành những kiểu khác. Chúng được định nghĩa bằng quy tắc gán loại này:

{: .definition}

>Quy tắc hình thành loại lambda ở cấp kiểu
>
>$$\frac{\Gamma, (\alpha :: A) \vdash (B :: Type)}{\Gamma \vdash \forall (\alpha :: A). (B :: Type)}$$

Chẳng hạn, với kiểu $Maybe$, quy tắc này sẽ nói

{: .definition}

>Quy tắc hình thành kiểu lambda ở cấp kiểu cho Maybe
>
$$\frac{\Gamma, (\alpha :: Type) \vdash Maybe[\alpha]:: Type}{\Gamma \vdash \forall (\alpha :: Type). Maybe[\alpha]:: Type}$$

### Hàm đa hình

Phần thú vị hơn (và khó hơn) của tính đa hình là mở rộng các mũi tên ở cấp giá trị để dùng với kiểu đa hình, nghĩa là có các hàm nhận một kiểu làm đối số, bên cạnh một giá trị.

Chẳng hạn, nếu làm việc trong ngữ cảnh STLC và dùng kiểu $MaybeString$ đã định nghĩa trong mục trước (chỉ dùng với chuỗi), ta có thể định nghĩa một hàm với chữ ký kiểu sau

{: .definition}

>Một hàm đơn hình
>
>$$z :: string \to MaybeString$$

Dùng khả năng của phép tính lambda đa hình, ta có thể trừu tượng hóa kiểu $String$ (bằng quy tắc *TAbs* để xây dựng một hàm đa hình có dạng sau.

{: .definition}

>Một hàm đa hình, dùng *TAbs*
>
> $$z' :: \forall \alpha. \alpha \to Maybe\ \alpha$$

Rồi ta dùng *TApp* để áp dụng tham số kiểu $String$ vào hàm trừu tượng, thu được hàm ban đầu.

{: .definition}

>Một hàm đơn hình, dùng *TApp*
>
> $$z = z'[String]$$

(Đây không phải cú pháp Haskell thực sự, vì Haskell tự động áp dụng kiểu --- bạn chỉ cần cung cấp giá trị, và ngôn ngữ suy ra kiểu từ đó).

Đây là các quy tắc gán kiểu của chính những hàm đa hình:


{: .definition}

>*Trừu tượng hóa kiểu* (hay *TAbs*)
>
>$$\frac{\Gamma, (\alpha :: A) \vdash z : C}{\Gamma \vdash (\Lambda \alpha :: A . z) : \forall (\alpha :: A) . C}$$

{: .definition}

>*Áp dụng kiểu* (*TApp*)
>
>$$\frac{\Gamma \vdash z' : \forall (\alpha :: A) . C , \Gamma  \vdash (X :: A)}{\Gamma \vdash z'[X] : C[\alpha := X]}$$

Và với điều này, ta hoàn tất định nghĩa System F.

{: .definition}

> Hệ *phép tính lambda đa hình* (System F) là hệ kiểu chỉ có một hàm tạo kiểu --- lambda đa hình, với các quy tắc gán kiểu *Abs* và *App* (để đưa vào và loại bỏ hạng tử) cùng các quy tắc gán loại *TAbs* và *TApp* (để đưa vào và loại bỏ kiểu). Nó còn có quy tắc gán kiểu *Var*. và quy tắc gán loại *TVar*.

Giờ ta đã sẵn sàng xem nó liên quan đến chủ đề chính của chúng ta như thế nào.

<!--

## TODO Interlude: Higher-kinds --- System F Omega

"System Fω can be stratified into an infinite hierarchy of Systems Fn, where F0 corresponds to the usual polymorphic System F (quantifying over kinds ∗), F1 to System F with type operators (quantifying over kinds e.g. ∗ → ∗), F2 additionally quantifying over kinds e.g. (∗ → ∗) → ∗ ("to the left of 2 arrows", so to speak), and so on."

-->

## Hệ kiểu như phạm trù

Ta đã chỉ ra một vài điểm tương đồng giữa lý thuyết kiểu và lý thuyết phạm trù, nhưng mối liên hệ không chỉ dừng ở tương đồng: nhìn đúng góc độ, các hệ kiểu *là* một loại phạm trù nhất định. Hơn nữa, ta đã biết đó là loại nào!

### Kiểu như đối tượng, mũi tên như cấu xạ

Hãy bắt đầu từ những điều cơ bản.

Mỗi kiểu là một đối tượng.

![Một loạt quả bóng](../06_type/category_type.svg)

Và mỗi mũi tên ở cấp giá trị (hàm) là một cấu xạ.

![Một loạt quả bóng được nối với nhau bằng các mũi tên](../06_type/category_arrow.svg)

Và giờ đến thứ không đơn giản như vậy --- các giá trị.

### Giá trị cũng là cấu xạ

Ta đã nói rằng lý thuyết phạm trù xoay quanh các mũi tên. Ở đây, dường như ta đã quay lưng với điều ấy và lại bắt đầu vẽ các giá trị cùng sơ đồ bên trong, chẳng hạn kiểu số tự nhiên.

![Kiểu số tự nhiên: 0, 1, 2, 3, v.v.](../06_type/nat_type_full_normal.svg)

Nhưng không có gì bất nhất. Ta đã nói rằng trong lý thuyết kiểu, "những giá trị duy nhất là các giá trị làm nguồn và đích của mũi tên". Trong trường hợp số tự nhiên, đó là mũi tên $successor$ và mũi tên $zero$.

![Một sơ đồ bên trong của kiểu số tự nhiên, một mũi tên trỏ từ tập hợp một phần tử đến giá trị 0, một mũi tên trỏ từ 0 đến 1, một mũi tên trỏ từ 1 đến 2, v.v.](../06_type/category_nat_internal.svg)

Điều này có nghĩa *các giá trị thực ra chỉ là một cách khác để biểu diễn mũi tên*.

Chẳng hạn, kiểu số tự nhiên có thể được biểu diễn từ bên ngoài như sau.

![Một sơ đồ bên ngoài của các hàm thuộc kiểu số tự nhiên --- 0: 1 -> N  và S: N -> N](../06_type/category_nat_external_zero.svg)

Đây là lúc ta trở lại với một định lý đơn giản về phần tử tập hợp/kiểu đã học ở chương thứ hai:

{: .theorem}

> Mỗi phần tử của bất kỳ tập hợp $X$ nào đều đẳng cấu với một hàm $$1 \to X$$ (trong đó $$1$$ chỉ tập hợp đơn phần tử).

Vậy một mũi tên từ $1 \to X$ với một kiểu $X$ nào đó tương đương với một *giá trị* của $X$ khi ta xem nó như tập hợp.

Điều này có nghĩa *mũi tên* từ $1 \to \mathbb{N}$ mà ta gọi là $0$ đẳng cấu với *giá trị* $0$.

Ngoài $1 \to \mathbb{N}$, ta còn có một mũi tên $s : \mathbb{N} \to \mathbb{N}$. Vậy điều gì xảy ra khi kết hợp hai mũi tên ấy? Ta thu được một mũi tên $1 \to \mathbb{N}$ khác --- $s \circ 0$, số liền sau của $0$, tức là $1$.

![Một sơ đồ bên ngoài của các hàm thuộc kiểu số tự nhiên, có thêm một mũi tên s.0, phép hợp thành của s và 0](../06_type/category_nat_external_one.svg)

Và nếu làm lại điều ấy, ta thu được $s \circ s \circ 0$.

![Một sơ đồ bên ngoài của các hàm thuộc kiểu số tự nhiên, có thêm một mũi tên s.s.0, phép hợp thành của s và s.0](../06_type/category_nat_external_two.svg)

Ta thấy mọi thứ diễn ra giống định nghĩa cũ. Thay vì *quay lại* với các giá trị, ta đã *đi hết một vòng* và phát hiện (hay tái phát hiện, vì ta đã biết từ Lý thuyết sơ cấp về phạm trù các tập hợp) rằng các giá trị chỉ là một cách vẽ mũi tên thuận tiện hơn.

### Phép tính lambda có kiểu đơn giản như một phạm trù Descartes đóng

Được rồi, ta đã hiểu: nếu xem kiểu như đối tượng, còn mũi tên *và giá trị* như cấu xạ, thì toàn bộ lý thuyết kiểu/hệ kiểu có thể được xem là một phạm trù. Nhưng là phạm trù nào? Để hiểu, ta xem lại những đặc điểm riêng của phép tính lambda: ta biết nó có kiểu Lambda, còn gọi là kiểu hàm, nên cần một phạm trù có kiểu hàm. Để định nghĩa kiểu ấy, bạn còn cần đối tượng cuối (đối tượng $1$) và các tích, nên ta đang tìm một phạm trù có những thứ đó. Thật bất ngờ, ta đã biết phạm trù nào có tất cả những đặc điểm ấy. Ta đã xem xét nó ở chương trước khi tìm hiểu lôgic.

{: .theorem}

> Phép tính lambda có kiểu đơn giản có thể được xem là một phạm trù Descartes đóng---các kiểu tuple và either là các phép toán "và" và "hoặc", các kiểu Unit và Empty là các giá trị "True" và "False", còn kiểu Lambda là đối tượng mũ.

### Phép tính lambda không kiểu như một monoid Descartes đóng

Ta sẽ không tìm hiểu sâu, nhưng tôi nghĩ cũng nên nhắc rằng còn có *phép tính lambda không kiểu*. Đây là ngôn ngữ chỉ có một kiểu --- hàm, và mọi hàm đều nhận mọi hàm khác làm đối số.

Vậy phép tính lambda không kiểu khớp với bức tranh của chúng ta như thế nào? Nó khớp hoàn hảo: nó tương ứng với các monoid Descartes đóng (gọi tắt là C-monoid). Đó là các phạm trù Descartes đóng chỉ có một đối tượng.

### Phép tính lambda đa hình như...

Ta đã xác định rằng các mũi tên ở cấp giá trị tương ứng *với cấu xạ*.

Nhưng còn *mũi tên ở cấp kiểu* (còn gọi là kiểu đa hình) thì sao? Chúng tương ứng với điều gì?

Ta sẽ tiếp tục điều này ở chương tiếp theo!

## Tương ứng Curry-Howard-Lambek

Trước khi kết thúc, hãy nghĩ về điều sau: vì sao phép tính lambda và lôgic trực giác tương ứng với gần như cùng một loại phạm trù --- Descartes đóng.

Để hiểu, ta xem xét sự tương ứng giữa các hệ lôgic và phạm trù đã nghiên cứu trong chương trước.

{: .theorem}

> Hệ lôgic của lôgic trực giác có thể được xem là một phạm trù bicartesian đóng---các phép toán "và" và "hoặc" là các tích/đối tích, các giá trị "True" và "False" là các đối tượng đầu/cuối, còn phép kéo theo là đối tượng mũ.

Đây gần như chính xác là định nghĩa mà giờ ta có về kiểu (khác biệt duy nhất là phép tính lambda có thể hoạt động mà không có đối tích và đối tượng đầu, nên đó là phạm trù Descartes đóng, trong khi lôgic trực giác cần những thứ ấy, nên đó là *bi*cartesian).

Điều này có nghĩa những điểm giống nhau giữa lôgic trực giác và phép tính lambda không dừng ở việc cả hai đều mang "tính phạm trù". Thực ra chúng là cùng một thứ:

- Các mệnh đề lôgic có thể được xem là *kiểu*.
- Chứng minh của một mệnh đề cho trước chẳng qua là một giá trị của kiểu tương ứng. - Kiểu Lambda là đối tượng kéo theo.
- Áp dụng hàm (App) là *modus ponens*.

| Lôgic trực giác        | Phép tính lambda có kiểu đơn giản   | Phạm trù Descartes đóng        |
|-----------------------------|--------------------------------|----------------------------------|
| Mệnh đề                 | Kiểu                           | Đối tượng                           |
| Kéo theo                 | Mũi tên                          | Cấu xạ                         |
| Mệnh đề cơ sở          | Giá trị thuộc kiểu A                | Cấu xạ 1 → A (phần tử toàn cục)  |
| Đối tượng kéo theo (A → B)  | Kiểu Lambda (A → B)            | Đối tượng mũ B^A           |
| Và (A ∧ B)                 | Tuple (A × B)                  | Tích A × B                    |
| Hoặc (A ∨ B)                  | Either (A + B)                 | Đối tích A + B                  |
| Đúng (⊤)                    | Kiểu Unit                      | Đối tượng cuối (1)              |
| Sai (⊥)                   | Kiểu Empty                     | Đối tượng đầu (0)               |
| Phủ định  A → ⊥             | Hàm A → Empty             | Cấu xạ A → 0                   |

Nói ngắn gọn, ở chương trước ta đã nói về sự tương ứng (gọi là tương ứng Curry-Howard-Lambek) giữa lôgic trực giác và các phạm trù Descartes đóng, còn giờ ta thêm một nhánh thứ ba của sự tương ứng --- phép tính lambda.

<!--

## Addendum: The connection between tuple function top and bottom.
Terminal objects are nullary products
Tuple and functions are related via tensor-hom
--> 

## Phụ lục: Các định nghĩa trong Haskell

Tôi đã suy nghĩ nhiều về việc nên cung cấp các định nghĩa kiểu cơ sở bằng Haskell có thể thực thi, hay dưới dạng công thức (tức là chữ đơn cách hay kiểu trình bày hiện đại). Cuối cùng, tôi quyết định công thức tốt hơn, nhưng tất cả quả thực đều là Haskell, với một vài điểm cần lưu ý:


Trước hết, ta muốn bắt đầu từ trạng thái trống. Trong Haskell, có thể làm vậy bằng cách bỏ thư viện chuẩn (gọi là "Prelude"), vốn thường được nhập ngầm.

```haskell
{-# LANGUAGE NoImplicitPrelude #-}
```
Và ta dùng thêm một phần mở rộng cho phép viết các định nghĩa kiểu tường minh hơn một chút.

```haskell
{-# LANGUAGE GADTs, NoImplicitPrelude #-}
```

Và cơ bản chỉ có thế. Cùng với việc dùng `forall` thay cho ký hiệu $\forall$.

```
{-# LANGUAGE GADTs,  NoImplicitPrelude #-} 
import qualified Prelude as P

data Bool where
  True :: Bool
  False :: Bool
  deriving (P.Show)

ifElse :: forall a. Bool -> a -> a -> a
ifElse True a b = a 
ifElse False a b = b

data Either a b where
  Left   :: forall a b. a -> Either a b
  Right  :: forall a b. b -> Either a b
  deriving (P.Show)

foldEither :: forall a b c. (a -> c) -> (b -> c) -> Either a b -> c
foldEither fa fb (Left  val) = fa val
foldEither fa fb (Right val) = fb val

data Tuple a b where
  Tuple :: forall a b. a -> b -> Tuple a b 
  deriving (P.Show)

first  :: Tuple a b -> a
first    (Tuple a b) = a

second :: Tuple a b -> b
second   (Tuple a b) = b

data Maybe a where
  Nothing :: forall a. Maybe a
  Just :: forall a. a -> Maybe a
  deriving (P.Show)

foldMaybe :: forall a b.  b -> (a -> b) -> Maybe a -> b
foldMaybe n _ Nothing  = n
foldMaybe _ f (Just x) = f x

data List a where
  Nil :: forall a. List a
  Cons :: forall a. a -> List a -> List a
  deriving (P.Show)

foldList :: (b -> a -> b) -> b -> List a -> b
foldList f z Nil = z
foldList f z (Cons x xs) = foldList f (f z x) xs

data Nat where
  Zero :: Nat
  Succ :: Nat -> Nat
  deriving (P.Show)

foldNat :: Nat -> a -> (a -> a) -> a
foldNat Zero z s = z
foldNat (Succ a) z s  = s (foldNat a z s)

plus :: Nat -> Nat -> Nat
plus Zero n = n
plus (Succ m) n = Succ (plus m n)

not :: Bool -> Bool
not False = True
not True = False

main = do 
  P.print (ifElse True 1 2) --1
  P.print (ifElse False 1 2) --2
  P.print (foldNat (Succ (Succ Zero)) 0 (P.+ 1)) -- 2

```

<!--
{% if site.distribution != 'print' %}
-->

## Lời giải

**Bài tập 1:** Có một ánh xạ từ `List` đến `Boolean` rất dễ hình dung. Dễ hình dung đến mức một số phương ngữ Lisp hoàn toàn không có kiểu `Boolean` và chỉ dựa vào ánh xạ này. Hãy thử đoán ánh xạ ấy.

---

**Bài tập 2:** Định nghĩa ánh xạ này (giữa `List` và `Bool`) trong Haskell. Định nghĩa nó lần thứ nhất bằng cách tự viết một hàm từ đầu, và lần thứ hai bằng hàm `foldList`.

---

**Bài tập 3:** Tôi giới thiệu với bạn kiểu `List Unit`, trong đó `Unit` là kiểu đơn phần tử, được ký hiệu là $1$ (một kiểu có một giá trị). Hãy vẽ các giá trị của `List Unit` cho đến khi hết chỗ.

Được rồi, đây là chúng (ta sẽ chỉ vẽ kết quả cuối cùng, chứ không vẽ các mũi tên).

![Các giá trị của kiểu List Unit, `(Unit, Nil)` `(Unit, (Unit, Nil))` `(Unit, (Unit, (Unit, Nil)))`, v.v.](../06_type/list_unit_task_answer.svg)

---

**Bài tập 4:** Kiểu `List Unit` thực ra đẳng cấu với một kiểu khác mà ta đã xem ở đây. Hãy tìm xem đó là kiểu nào.

Nó đẳng cấu với kiểu số tự nhiên (`Nat`). `List` và `Nat` đều là kiểu quy nạp; khác biệt duy nhất là hàm tạo quy nạp của `List`, `Cons`, được tham số hóa bởi một kiểu, nghĩa là có một hàm tạo cho mỗi giá trị của kiểu ấy, còn `Nat` chỉ có một hàm tạo `Succ`. Do đó, một danh sách của một kiểu chỉ có một giá trị như `Unit` đẳng cấu với `Nat`.

---

**Bài tập 5:** Viết một hàm tạo của Tuple. Viết một hàm `fold` cho Either.

Trước hết là hàm tạo cho bộ. Điều này rất đơn giản: để có những hàm cho ra một `a` và một `b`, bạn phải *đưa vào* một `a` và một `b` trong hàm tạo.

```haskell
data Tuple a b where
  Tuple :: forall a b. a -> b -> Tuple a b 
```

Hàm `fold` của `Either` cũng rất dễ hiểu, dù thoạt nhìn có thể không thấy vậy: như tên gọi gợi ý, một `Either a b` hoặc là một `a`, hoặc là một `b`, nên để chuyển `Either a b -> c`, bạn phải cung cấp `(a -> c)` và `(b -> c)`.

```haskell
foldEither :: forall a b c. (a -> c) -> (b -> c) -> Either a b -> c
foldEither fa fb (Left  val) = fa val
foldEither fa fb (Right val) = fb val
```

---

**Bài tập 6:** Ngoài `Tuple`, còn một kiểu âm rất quan trọng mà ta sẽ tìm hiểu trong chương này (và ở nhiều nơi khác).

Đó là kiểu *hàm*. Ta có thể xem hàm như "đối tượng có thể được tính giá trị", nghĩa là giống các bộ, chúng được đặc trưng bởi quy tắc loại bỏ hạng tử: một hàm `a -> b` (cùng một giá trị `a`) có thể được rút về một giá trị `b`.

---

**Bài tập 7:** Viết một phiên bản mã hóa Church của kiểu số tự nhiên

Đây là nó


$$
\begin{aligned}
type\ \mathbb{N} &= \forall b. b \to (b \to b) \to b \\
zero &: \mathbb{N} \\
zero\ z\ s &= z \\
succ &: \mathbb{N} \to \mathbb{N} \\
succ\ n\ z\ s &= s\ (n\ z\ s) 
\end{aligned}
$$

$$
\begin{aligned}
foldNat &: \forall a\ b. b \to (b \to b) \to \mathbb{N} \to b \\
foldNat\ z\ s\ n &= n\ z\ s 
\end{aligned}
$$

**Bài tập 8:** Định nghĩa quy tắc loại bỏ cho các giá trị Boolean bằng suy diễn tự nhiên.

Quy tắc loại bỏ (hàm $ifElse$) được biểu diễn thành quy tắc gán kiểu như sau:

$$\frac{\Gamma \vdash b : \mathrm{Bool} \qquad \Gamma \vdash x : a \qquad \Gamma \vdash y : a}{\Gamma \vdash \mathrm{ifElse}\ b\ x\ y : a}$$

Với một giá trị Boolean $b$ và hai giá trị của một kiểu $a$ nào đó, ta có thể tạo ra một giá trị thuộc kiểu $a$.

<!--
{%endif%}
-->

