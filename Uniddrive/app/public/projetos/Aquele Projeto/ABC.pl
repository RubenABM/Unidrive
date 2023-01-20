%Factos - A informação de cada pessoa, nomeadamente o nome e uma lista de hobbies.
perfil(andre, hobbies([comer, jogar, passear, beber])).
perfil(rui, hobbies([exercicio, jogar, trabalhar, "sair com amigos", ler])).
perfil(marco, hobbies([ler, comer, exercicio, trabalhar])).

perfil(ana, hobbies([jogar, ler, passear, trabalhar, beber])).
perfil(susana, hobbies([correr, caminhar, ler, "sair com amigos"])).
perfil(marcia, hobbies([comer, jogar, trabalhar])).

%Factos - Informação adicional dos utilizadores, a sua idade.
info(andre, 18).
info(rui, 20).
info(marco, 22).

info(ana, 19).
info(susana, 22).
info(marcia, 25).


%Regra - Indica se duas pessoas têm pelo menos um hobby em comum, ou com que pessoa se partilha hobbies.
%Recebe o nome das pessoas como parametros.
match_hobby(P1, P2) :- dif(P1, P2), perfil(P1, hobbies(H1)), perfil(P2, hobbies(H2)),
    once(( member(X, H1), member(X, H2) )).


%Regra - Indica se duas pessoas têm pelo menos 2 hobbies em comum.
%Recebe o nome das pessoas como parametros.
match_hobby2(P1, P2) :- dif(P1, P2), perfil(P1, hobbies(H1)), perfil(P2, hobbies(H2)),
    limit(2,( member(X, H1), member(X, H2) )).


%Regra - É utilizada na regra seguinte, count_common_hobbies, fazendo dez passagens pela lista.
%Recebe o nome das pessoas como parametros.
match_hobbyX(P1, P2) :- dif(P1, P2), perfil(P1, hobbies(H1)), perfil(P2, hobbies(H2)),
    limit(10,( member(X, H1), member(X, H2) )).


%Regra - Utilizada para fazer a contagem de hobbies em comum entre 2 pessoas.
%Recebe o nome das pessoas como parametros e uma variavel C, representando o count.
count_common_hobbies(P1, P2, C) :- dif(P1, P2), aggregate_all(count, match_hobbyX(P1, P2), C).


%Regra - Indica as pessoas com menos de X idade.
%Recebe o nome da pessoa e a idade pretendida.
find_age(P1, A) :- info(P1, Y), Y =< A.


%Regra - Indica as pessoas com interesse em comum e idade pretendida
%Recebe o nome das pessoas e a idade pretendida.
common_age_hobby(P1, P2, A) :- find_age(P2, A), match_hobby(P1, P2).


%Regra - Indica as pessoas com um hobby específico
%Recebe o nome da pessoa e o hobby.
find_hobbies(P1, H) :- perfil(P1, hobbies(H1)), member(H, H1).


%Regra - Indica as pessoas com 1 hobby em comum, pesquisando pelo hobby e idade
%Recebe o nome da pessoa e o hobby.
common_age_hobby2(P1, H, A) :- find_hobbies(P1, H), find_age(P1, A).
