from django.urls import path
from student import views

urlpatterns = [
    path('', views.home, name="home"),
    path('studlog', views.studlog, name="studlog"),
    # path('adminlog', views.adminlog, name="adminlog"),
    path('register', views.register, name="register"),
    path('reg', views.handleSignup, name="handleSignup"),
    # path('signup', views.handleSignup, name="handleSignup"),
    path('loggedstud', views.loggedstud, name="loggedstud"),
    path('login', views.handleLogin, name="handleLogin"),
    path('logout', views.handleLogout, name="handleLogout"),
    path('edit', views.edit, name="edit"),
    path('dash', views.dash, name="dash"),
    # path('sd', views.sd, name="sd"),
    path('add', views.add, name="add"),
    path('activestud', views.activestud, name="activestud"),
    path('inactivestud', views.inactivestud, name="inactivestud"),
    path('updatestud/<int:id>', views.updatestud, name="updatestud"),
    path('inactstud/<int:id>', views.inactstud, name="inactstud"),
    path('actstud/<int:id>', views.actstud, name="actstud"),
]