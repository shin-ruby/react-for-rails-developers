course = Course.create(title: 'Hello World', description: 'Create a react app with ruby on rails')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
  { title: '1. Learning Judo.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '2. Learning Aikido.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '3. Learning Ruby on Rails. ', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '4. Learning React and Taro.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
])


articles = Article.create([
  {title: '休館期間延長のお知らせ', content: '2月中は全ての稽古をお休みと連絡をしておりましたが、新型肺炎が予想以上の流行により、3月中の稽古もお休みにすることとなりました。
稽古の再開については、また連絡いたしますので、よろしくお願いいたします。'},
  {title: '仮面ライダードライブ タイプスピード', content: 'S.I.C. 仮面ライダードライブシリーズ始動。
造形アレンジは、「ロイミュード」のデザインも手掛ける、竹谷隆之氏。
デザインアレンジ 竹谷隆之氏、原型製作に谷口順一氏を迎え、よりメカディテールが強調された仮面ライダードライブが生まれる。
タイヤコウカーンで全身にフレアパーツを装着することが可能。パーツ差し替えで再現可能。
竹谷氏のパーツアレンジにより、全身に炎を纏うダイナミックな仮面ライダードライブ タイプスピードフレアを演出可能。
可動式のハンドル剣・ドア銃が付属。もちろん付属のシフトカーを装填可能。'}
])
