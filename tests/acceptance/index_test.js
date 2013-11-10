var App;

module('Acceptances - End Less Scroll', {
  setup: function(){
    fakehr.start();
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
    fakehr.reset();
  }
});

test('show alert when there are no more items', function(){
  expect(1);

  visit('/')
  .httpRespond("get","http://ember-pagination-backend.herokuapp.com/posts", {posts:[], meta:{totalPages:1, currentPage: 1}}).then(function(){
    /*scrollToEndOfPage()*/
    equal(find("div.alert-no-more-items").length, 1);
  });
});

test('load more items when click on more buttons', function(){
  expect(0);

  visit('/')
  .httpRespond("get","http://ember-pagination-backend.herokuapp.com/posts", {"posts":[{"id":1,"title":"Vel voluptates rerum ipsam dolorem et laudantium distinctio.","body":"Sit omnis non at est nobis quaerat neque nemo voluptatem voluptas facere repellendus placeat animi sunt ut dolores consequatur ex eveniet et doloribus ut similique quia sed qui vitae quo."},{"id":2,"title":"Eos saepe in et voluptatum.","body":"Porro nulla quia autem ut omnis non provident ab commodi adipisci quis et est corporis beatae sunt omnis officia quisquam enim sed in ut id eveniet velit et vel quas praesentium nostrum quia."},{"id":3,"title":"Qui cumque quaerat est qui voluptatem ea illum officia.","body":"Facilis itaque perspiciatis velit laudantium reiciendis exercitationem ut aut aliquam magni earum voluptas facere placeat sed laboriosam rerum sint eos sint voluptates ea qui ea et voluptas autem dolor cumque velit quidem repellendus iste nisi."},{"id":4,"title":"Ratione dolor non expedita impedit et id.","body":"Dolorem dignissimos quasi sint eligendi aut odit nam voluptatem in iusto beatae voluptatibus cumque sapiente doloribus dolores ut minima tempora exercitationem ut quo eos animi ducimus odio deserunt amet sunt qui illo."},{"id":5,"title":"Consequatur delectus sit iste est.","body":"Itaque quae quasi voluptates placeat autem velit modi expedita eos illum facere est et ut est error consequuntur velit dolor incidunt vel minus cumque aliquam similique qui dicta animi voluptatibus voluptate ipsum veniam."},{"id":6,"title":"Iste autem molestiae nihil aut quia similique voluptatibus doloremque.","body":"Tempora est impedit voluptatem a vitae consequatur nesciunt perferendis sapiente saepe facilis dolores ea similique cumque est repellendus aliquam ab sunt occaecati nisi illum accusamus consequatur placeat quaerat distinctio eligendi laborum harum fugit dolorum et."},{"id":7,"title":"Minima dolor a sapiente expedita.","body":"Sit quas incidunt cupiditate voluptatum ut accusantium eum voluptatem dignissimos repellat enim voluptate inventore atque nostrum et ipsa natus sed non nam accusamus odit iste magnam ullam suscipit explicabo enim dolorem in id libero."},{"id":8,"title":"Consequatur veniam autem eos molestias.","body":"Officiis ut tempore iure nihil rem ut amet eius neque perspiciatis quas eligendi velit rerum quam aspernatur facilis qui impedit fuga nemo ullam autem aliquam aut itaque ea voluptatum blanditiis facere minus iusto animi adipisci."},{"id":9,"title":"Pariatur numquam sint qui sequi perspiciatis deleniti.","body":"Dolores eaque ea facilis rerum amet accusantium vero aut reiciendis pariatur ex dolorum est voluptas assumenda quam omnis et et quidem repellat est doloremque laborum sunt voluptates debitis libero dolores ut sed."},{"id":10,"title":"Nisi odit accusantium eaque sint.","body":"Nobis ad corrupti ut possimus deleniti perspiciatis optio rerum sit facilis voluptatem magnam quaerat a quia minus eos ut sint porro aut molestiae est ullam consequatur dolores sequi occaecati deserunt natus sit iusto."}],"meta":{"totalPages":2,"currentPage":1,"perPage":10}})
  .then(function(){
    click("button.btn-more")
    .httpRespond("get", "http://ember-pagination-backend.herokuapp.com/posts", {"posts":[{"id":11,"title":"Nihil perferendis odit ratione temporibus in vitae odio.","body":"Sint placeat aliquam necessitatibus repellat mollitia reiciendis dignissimos veritatis porro voluptas cumque illo alias qui reprehenderit cupiditate et voluptatibus aut perferendis accusantium laboriosam minus et rerum hic sed ratione et a voluptatem quia ut."},{"id":12,"title":"Iure ut ut eligendi eos distinctio iste voluptas.","body":"Sapiente est eum ea et sed non qui voluptas autem qui voluptas officia temporibus incidunt consequatur laborum iure voluptatum molestias tempora asperiores aut eum voluptatem odio et sunt autem voluptas reiciendis necessitatibus vero aperiam omnis."},{"id":13,"title":"Cum magni quos ad in architecto expedita.","body":"Eos alias optio eveniet aut debitis ut provident qui nostrum dolorem sint dignissimos tempora et in velit ullam asperiores maxime fugit ea sed dolore laboriosam incidunt vitae recusandae nemo consequuntur modi saepe exercitationem."},{"id":14,"title":"Error provident quos odio est neque et iusto eaque consequatur.","body":"Beatae aut consequatur sit eaque incidunt sed enim voluptatem veritatis iusto voluptates voluptatem porro maxime aperiam ut facilis quam iure fuga occaecati quas excepturi odio eveniet ratione similique nesciunt dolores nostrum illo sed."},{"id":15,"title":"Nihil repellat nihil dolores ipsum.","body":"Delectus temporibus dignissimos omnis laborum occaecati hic corporis est necessitatibus dolorum non numquam rerum rerum asperiores non earum eum et illo quo tempora ipsam ut atque quis velit tempore consequatur molestias magni aut non cumque."},{"id":16,"title":"Asperiores non alias quaerat reprehenderit rerum architecto saepe odio.","body":"Nemo est alias ullam accusamus beatae voluptas explicabo eum eos quis omnis eum dicta dolorum facere suscipit velit sapiente ut totam minus corporis ad ut quo aperiam vitae veniam soluta repellendus neque qui."},{"id":17,"title":"Ad placeat consequuntur beatae in dolorem adipisci quisquam aperiam.","body":"Incidunt ea consequatur error dolores voluptatem earum unde deserunt exercitationem quos ut eveniet omnis fugit consectetur modi quidem reiciendis ducimus quia laborum aut nemo et est est alias ad reprehenderit nihil qui."},{"id":18,"title":"Laborum molestiae et corrupti fuga quae quia sit.","body":"Consectetur iure perferendis ut veritatis et animi ullam consequatur soluta aut dolore neque quia in ratione sint facere aliquid magnam adipisci tempora distinctio sed porro vel necessitatibus quo dolores ipsum accusantium."},{"id":19,"title":"Provident repellendus autem error magnam earum minima.","body":"Non qui est facere necessitatibus ut ducimus possimus fuga dolor id praesentium consequatur autem perspiciatis voluptatem architecto expedita voluptatem quos est vero nihil velit temporibus eius aliquam eum soluta quibusdam quam aut consequatur corrupti."},{"id":20,"title":"Aut possimus sed qui harum quae omnis quis consequuntur.","body":"Sit tenetur voluptatem nam necessitatibus et repellendus voluptatem a vitae saepe voluptas qui distinctio aperiam ut vel illo ipsa veniam dicta repudiandae sit voluptatem consequatur doloremque exercitationem voluptatem recusandae ipsum."}],"meta":{"totalPages":2,"currentPage":2,"perPage":10}});
  });

})