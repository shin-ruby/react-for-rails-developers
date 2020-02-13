course = Course.create(title: 'Hello World', description: 'Create a react app with ruby on rails')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
  { title: '1. Learning Judo.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '2. Learning Aikido.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '3. Learning Ruby on Rails. ', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
  { title: '4. Learning React and Taro.', description: 'lorem ipsum', url: 'https://www.youtube.com/embed/6ACq2QXgGDI', section: section },
])
