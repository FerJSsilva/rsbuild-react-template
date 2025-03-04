import React, { useState } from 'react';
import { 
  useGetPostsQuery,
  useGetPostQuery,
  useGetPostCommentsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation
} from '../store/api/postsApi';

const RtkQueryDemo = () => {
  const [selectedPostId, setSelectedPostId] = useState(1);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostBody, setNewPostBody] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateBody, setUpdateBody] = useState('');

  // Requisições de consulta
  const {
    data: posts,
    isLoading: postsLoading,
    isError: postsError,
    refetch: refetchPosts
  } = useGetPostsQuery(undefined, {
    // Opções para controle de polling, cache, etc.
    pollingInterval: 0, // Sem polling automático
    refetchOnMountOrArgChange: true, // Refetch quando o componente montar
  });

  const {
    data: selectedPost,
    isLoading: postLoading,
    isError: postError
  } = useGetPostQuery(selectedPostId, {
    skip: !selectedPostId, // Pula a consulta se não houver ID selecionado
  });

  const {
    data: postComments,
    isLoading: commentsLoading,
    isError: commentsError
  } = useGetPostCommentsQuery(selectedPostId, {
    skip: !selectedPostId,
  });

  // Requisições de mutação
  const [addPost, { isLoading: isAdding }] = useAddPostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  // Handlers
  const handleSelectPost = (id) => {
    setSelectedPostId(id);
    // Preencher formulário de atualização se tivermos dados do post
    if (selectedPost) {
      setUpdateTitle(selectedPost.title);
      setUpdateBody(selectedPost.body);
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const result = await addPost({
        title: newPostTitle,
        body: newPostBody,
        userId: 1, // mockado para exemplo
      }).unwrap();
      
      console.log('Post adicionado:', result);
      setNewPostTitle('');
      setNewPostBody('');
      // Força refetch para atualizar a lista
      refetchPosts();
    } catch (err) {
      console.error('Falha ao adicionar post:', err);
    }
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    if (!selectedPostId) return;

    try {
      const result = await updatePost({
        id: selectedPostId,
        title: updateTitle,
        body: updateBody,
        userId: 1, // mockado para exemplo
      }).unwrap();
      
      console.log('Post atualizado:', result);
    } catch (err) {
      console.error('Falha ao atualizar post:', err);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id).unwrap();
      console.log('Post excluído:', id);
      // Seleciona o primeiro post após exclusão
      if (id === selectedPostId && posts?.length > 0) {
        setSelectedPostId(posts[0].id);
      }
      // Força refetch para atualizar a lista
      refetchPosts();
    } catch (err) {
      console.error('Falha ao excluir post:', err);
    }
  };

  // Renderização condicional para carregamento/erro
  if (postsLoading) return <div className="text-white">Carregando posts...</div>;
  if (postsError) return <div className="text-red-500">Erro ao carregar posts!</div>;

  return (
    <div className="text-white">
      <h1 className="text-2xl font-bold mb-4">Demonstração RTK Query</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lista de Posts */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Posts</h2>
          <button 
            onClick={() => refetchPosts()} 
            className="mb-3 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Atualizar Lista
          </button>
          
          <div className="max-h-80 overflow-y-auto">
            {posts?.slice(0, 10).map(post => (
              <div 
                key={post.id} 
                className={`p-3 mb-2 border rounded cursor-pointer flex justify-between items-center ${
                  post.id === selectedPostId ? 'bg-blue-900 border-blue-500' : 'bg-gray-700 border-gray-600'
                }`}
                onClick={() => handleSelectPost(post.id)}
              >
                <div className="truncate">
                  <h3 className="font-medium">{post.title}</h3>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeletePost(post.id);
                  }}
                  className="ml-2 px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-sm"
                  disabled={isDeleting}
                >
                  {isDeleting && post.id === selectedPostId ? 'Excluindo...' : 'Excluir'}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Detalhes do Post */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Detalhes do Post</h2>
          {postLoading ? (
            <div>Carregando detalhes...</div>
          ) : postError ? (
            <div className="text-red-500">Erro ao carregar detalhes!</div>
          ) : selectedPost ? (
            <div className="bg-gray-700 p-4 rounded border border-gray-600">
              <h3 className="text-lg font-medium mb-2">{selectedPost.title}</h3>
              <p className="mb-4">{selectedPost.body}</p>
              
              <h4 className="font-medium mt-4 mb-2">Comentários</h4>
              {commentsLoading ? (
                <div>Carregando comentários...</div>
              ) : commentsError ? (
                <div className="text-red-500">Erro ao carregar comentários!</div>
              ) : (
                <div className="max-h-40 overflow-y-auto">
                  {postComments?.map(comment => (
                    <div key={comment.id} className="p-2 mb-2 bg-gray-800 rounded text-sm">
                      <strong>{comment.email}</strong>
                      <p>{comment.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div>Selecione um post para ver detalhes</div>
          )}
        </div>
      </div>
      
      {/* Formulários */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Adicionar Post */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold mb-3">Adicionar Novo Post</h2>
          <form onSubmit={handleAddPost}>
            <div className="mb-3">
              <label className="block mb-1">Título</label>
              <input
                type="text"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Conteúdo</label>
              <textarea
                value={newPostBody}
                onChange={(e) => setNewPostBody(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                rows="3"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              disabled={isAdding}
            >
              {isAdding ? 'Adicionando...' : 'Adicionar Post'}
            </button>
          </form>
        </div>
        
        {/* Atualizar Post */}
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold mb-3">Atualizar Post</h2>
          <form onSubmit={handleUpdatePost}>
            <div className="mb-3">
              <label className="block mb-1">Título</label>
              <input
                type="text"
                value={updateTitle}
                onChange={(e) => setUpdateTitle(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                required
                disabled={!selectedPost}
              />
            </div>
            <div className="mb-3">
              <label className="block mb-1">Conteúdo</label>
              <textarea
                value={updateBody}
                onChange={(e) => setUpdateBody(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded text-white"
                rows="3"
                required
                disabled={!selectedPost}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded"
              disabled={isUpdating || !selectedPost}
            >
              {isUpdating ? 'Atualizando...' : 'Atualizar Post'}
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-800 rounded">
        <h2 className="text-xl font-semibold mb-3">Sobre RTK Query</h2>
        <p className="mb-2">
          O RTK Query é uma ferramenta poderosa para busca e gerenciamento de dados, com:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Cache de dados automático</li>
          <li>Deduplicação de requisições</li>
          <li>Polling e refetching configuráveis</li>
          <li>Estado de carregamento e erro simplificado</li>
          <li>Invalidação de cache automática após mutações</li>
          <li>Gerenciamento de ciclo de vida da subscrição</li>
        </ul>
      </div>
    </div>
  );
};

export default RtkQueryDemo;
