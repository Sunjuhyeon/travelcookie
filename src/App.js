
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useEffect(() => {
    setVh()

    function onResize(){
      setVh()
    }
    
    window.addEventListener('resize',onResize)

  }, [])

  const [page, setPage] = useState(0)

  const questionList = [
    {
      q:['갑자기 일이 생겨서', '오늘 못 만날 것 같아'],
      a:[{type:'I', text:'어쩔 수 없지 뭐ㅠㅠ(오예!!!!)'},{type:'E', text:'어쩔 수 없지 뭐ㅠㅠ(그럼 누구 만나지??)'}]
    },
    {
      q:['너 이번주에 엄청 바빴다며', '주말엔 뭐해?'],
      a:[{type:'I', text:'너무 힘들었어ㅠㅠ 집에서 쉬어야지'},{type:'E', text:'바빠서 못놀았어ㅠㅠ 밀린 약속 잡아야지!'}]
    },
    {
      q:['자주가는 카페 사장님이 아는척을 했다'],
      a:[{type:'I', text:'(이제 그만 와야지)'},{type:'E', text:'(더 자주 와야지)'}]
    },
    {
      q:['넌 노래 들을 때 뭘 중요히게 생각해?'],
      a:[{type:'S', text:'멜로디'},{type:'N', text:'가사'}]
    },
    {
      q:['사과하면 뭐가 떠올라?'],
      a:[{type:'S', text:'빨갛다, 맛있다, 동그랗다'},{type:'N', text:'아이폰 로고! 백설공주도?'}]
    },
    {
      q:['오늘 점심 뭐 먹을래?'],
      a:[{type:'S', text:'음.. 파스타 먹을까?'},{type:'N', text:'파스타 먹을까? 아 파스타 먹으면 느끼하니까 저녁엔 김치찌개 먹어야겠다!!'}]
    },
    {
      q:['나 요즘 너무 우울해서', '여행 가려고'],
      a:[{type:'F', text:'왜 우울해? ㅠㅠ'},{type:'T', text:'어디로 여행가게?'}]
    },
    {
      q:['슬픔을 나누면 어떻게 될까?'],
      a:[{type:'F', text:'슬픔이 반이 되지!'},{type:'T', text:'슬픈 사람이 둘이 되지..'}]
    },
    {
      q:['나 시험 떨어졌어 ㅠㅠ'],
      a:[{type:'F', text:'많이 속상하겠다 ㅠㅠ'},{type:'T', text:'무슨 시험 봤는데? 몇점?'}]
    },
    {
      q:['안읽은 메세지 갯수 몇개야?'],
      a:[{type:'P', text:'10개 이상'},{type:'J', text:'0개~한자리 수'}]
    },
    {
      q:['여행 일정 짰어?'],
      a:[{type:'P', text:'ㅇㅇ 국밥먹고 바다가서 놀다가 카페가자'},{type:'J', text:'7시30분 만남, 8시 할매국밥, 9시 유리박물관, 11시 ...'}]
    },
    {
      q:['2주 뒤에 시험이다...'],
      a:[{type:'P', text:'시험이 2주나 남았네!'},{type:'J', text:'시험이 2주 밖에 안남았네?'}]
    },
    {
      q:['테스트가 모두 끝났어. 점수 보러 갈래?'],
      a:[{type:'', text:'결과 보러 가기'}]
    }
  ]

  const [mbtiList, setMbtiList] = useState([
    {name:'I', count:0}, {name:'E', count:0}, {name:'S', count:0}, {name:'N', count:0}, 
    {name:'F', count:0}, {name:'T', count:0}, {name:'P', count:0}, {name:'J', count:0}
  ]);

  const handleCkAnswer = (type,i) => {
    let ls = mbtiList
    for(let i = 0; i < ls.length; i++){
      if(ls[i].name===type){
        ls[i].count = ls[i].count + 1
      }
    }

    setMbtiList(ls)
    setPage(page+1)

    if(i+1 === questionList.length){
      setMbti()
    }
  }

  const [mbtiContent, setMbtiContent] = useState([])
  function setMbti(){
    let mc = [
      {mbti:'ENTP', contents:['박학다식하고, 독창적이다.','끊임없이 새로운 시도를 한다.']},
      {mbti:'INTP', contents:['지적 호기심이 높으며,','잠재력과 가능성을 중요시한다.']},
      {mbti:'ESFJ', contents:['사람에 대한 관심이 많다.','친절하다. 동정심이 많다.']},
      {mbti:'ESTP', contents:['느긋하고, 관용적이며, 타협을 잘한다.','현실적 문제 해결에 능숙하다.']},
      {mbti:'ISFJ', contents:['차분하고 헌신적이며, 인내심이 강해.','타인의 감정변화에 주의를 기울여줘.']},
      {mbti:'ISTP', contents:['과묵하고 분석적이며','적응력이 강하다.']},
      {mbti:'ENFJ', contents:['사교적이고, 타인의 의견을 존중한다.','비판을 받으면 예민하게 반응한다.']},
      {mbti:'INFJ', contents:['높은 통찰력으로 사람들에게 영감을 준다.','공동체의 이익을 중요시한다.']},
      {mbti:'ENFP', contents:['상상력이 풍부하고, 순발력이 뛰어나다.','일상적인 활동에 지루함을 느낀다.']},
      {mbti:'INFP', contents:['성실하고 이해심 많으며, 개방적이다.','잘 표현하지 않으나, 내적 신념이 강하다.']},
      {mbti:'ESFP', contents:['호기심이 많으며, 개방적이다.','구체적인 사실을 중시한다.']},
      {mbti:'ISFP', contents:['온화하고 겸손하다.','삶의 여유를 만끽한다.']},
      {mbti:'ESTJ', contents:['체계적으로 일하고, 규칙을 준수한다.','사실적 목표 설정에 능하다.']},
      {mbti:'ISTJ', contents:['책임감이 강하며, 현실적이야.','매사에 철저하고 보수적이야.']},
      {mbti:'INTJ', contents:['의지가 강하고, 독립적이다.','분석력이 뛰어나다.']},
      {mbti:'ENTJ', contents:['철저한 준비를 하며, 활동적이다.','통솔력이 있으며, 단호하다.']},
    ]

    let IorE = 
    mbtiList.find(function(data){return data.name === 'I'}).count >
    mbtiList.find(function(data){return data.name === 'E'}).count ? 'I':'E'
    let SorN = 
    mbtiList.find(function(data){return data.name === 'S'}).count >
    mbtiList.find(function(data){return data.name === 'N'}).count ? 'S':'N'
    let ForT = 
    mbtiList.find(function(data){return data.name === 'F'}).count >
    mbtiList.find(function(data){return data.name === 'T'}).count ? 'F':'T'
    let PorJ = 
    mbtiList.find(function(data){return data.name === 'P'}).count >
    mbtiList.find(function(data){return data.name === 'J'}).count ? 'P':'J'
    
    let mbti = IorE + SorN + ForT + PorJ

    setMbtiContent(mc.filter(v => v.mbti === mbti)[0])
  }

  return (
    <div className="App" id="testLayout">
      {
        page === 0 ?
        <div className='startpage'>
          <div className='startlogo'>
            <div>MBTI</div>
            <div>▼</div>
          </div>
          <div className='startbutton' onClick={() => setPage(1)}>테스트 시작하기</div>
        </div>
        :page <= questionList.length ?
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI 테스트</div>
            <div>{`${page} / ${questionList.length}`}</div>
          </div>
          {
            questionList.map((v, i) => {
              return(
                <div key={i} className='questionList' style={{display:page===i+1?'flex':'none'}}>
                  {console.log(mbtiList)}
                  <div className='qLayout'>
                    <div className='proflieImg'>
                      <div></div>
                      <div></div>
                    </div>
                    <div className='chatLayout'>
                      {
                        v.q.map((qval, qidx) => {
                          return(
                            <div key={qidx} className='chatBox'>
                              <div>◀</div><div>{qval}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className='aLayout'>
                    <div className='aChatBox'>
                      <div>+</div><div>#</div>
                    </div>
                    {
                      v.a.map((aval, aidx) => {
                        return(
                          <div key={aidx} className='answerBox' onClick={() => handleCkAnswer(aval.type,i)}>
                            {aval.text}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
        :
        <div className='questionLayout'>
          <div className='mbtiTitle'>
            <div>MBTI 테스트</div>
            <div onClick={() => window.location.reload()}>다시하기</div>
          </div>
                <div className='questionList' style={{display:'flex'}}>
                  {console.log(mbtiList)}
                  <div className='qLayout'>
                    <div className='proflieImg'>
                      <div></div>
                      <div></div>
                    </div>
                    <div className='chatLayout'>
                      <div className='chatBox'>
                        <div>◀</div><div>당신의 mbti는 {mbtiContent.mbti}입니다!</div>
                      </div>
                      <div className='chatBox'>
                        <div>◀</div><div>{mbtiContent.mbti}는요.</div>
                      </div>
                      {
                        mbtiContent.contents.map((v, i) => {
                          return(
                            <div className='chatBox' key={i}>
                              <div>◀</div><div>{v}</div>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className='aLayout'>
                    <div className='aChatBox'>
                      <div>+</div><div>#</div>
                    </div>
                  </div>
                </div>
        </div>
      }
    </div>
  );
}

export default App;
